import cookie from "cookie";
import e from "express";
import { Server, Socket } from "socket.io";
import { CallParticipant, CallRoom, VoiceUser } from "../models/call_models.js";
import { PeerServer } from "peer";

const peerServer = PeerServer({ port: 3001, path: "/" });

peerServer.on("connection", client => {
    let peerId = client.getId();
    var mod = {
        "client": client,
        "socketId": ""
    }
    if (!peerSockets.hasOwnProperty(peerId)) {
        peerSockets[peerId] = mod;
    }
    console.log(peerSockets);
});
peerServer.on("disconnect", client => {
    let peerId = client.getId();
    if (peerSockets.hasOwnProperty(peerId)) {
        delete peerSockets[peerId];
    }
});
var peerSockets = {};
var socketConnections = {};
var usersSocketsConnectedToService = {};

var users = {};

var callRooms = [new CallRoom]; callRooms.splice(0, 1);
var ran = false;
export function Run(http, app) {
    if (ran) { return; }
    ran = true;
    const io = new Server(http, {
        cors: {
            origin: '*',
            allowedHeaders: "*"
        }
    });
    // export class VoiceService{
    // var usersConnectedToSocket =
    io.on("message", function (ggg) {

    });
    io.on("connection", function (socket) {
        // console.log(Date.now());
        socket.client
        let cookieString = socket.handshake.headers.cookie;
        if (cookieString == undefined) {
            cookieString = socket.handshake.headers.auth;
        }
        // console.log("auth - " + socket.handshake.headers.auth);
        let cookies = cookie.parse(cookieString);
        let username = "";
        if (cookies.username != undefined) {

            username = cookies.username;
        }
        else {
            return;
        }
        AddSocketConnection(socket.id, username);
        let voiceUser = new VoiceUser(); voiceUser = users[username];

        socket.on("message", function (data) {
            // console.log(data);
        });
        socket.on("call", function (data) {
            voiceUser.socketUsedForCall = socket;
            voiceUser.peerId = data.peerId;

            peerSockets[data.peerId].socketId = socket.id;

            calUser(username, data.userToCall);
        });
        socket.on("answer-call", function (data) {
            console.log(socket.rooms);
            if (voiceUser.incomingCalls.includes(data.otherUser)) {
                voiceUser.incomingCalls.splice(voiceUser.incomingCalls.indexOf(data.otherUser), 1);
                if (voiceUser.callRoom == null && users.hasOwnProperty(data.otherUser)) {
                    let otherVoiceUser = new VoiceUser(); otherVoiceUser = users[data.otherUser];
                    if (otherVoiceUser.usersImCalling.includes(username)) {
                        otherVoiceUser.usersImCalling.splice(otherVoiceUser.usersImCalling.indexOf(username), 1);
                    }
                    if (otherVoiceUser.callRoom != null) {
                        voiceUser.callRoom = otherVoiceUser.callRoom;
                        voiceUser.socketUsedForCall = socket;
                        let participant = new CallParticipant(username, voiceUser);
                        voiceUser.peerId = data.peerId;
                        peerSockets[data.peerId].socketId = socket.id;
                        voiceUser.callRoom.AddParticipant(participant);
                    } else {
                        voiceUser.callRoom = startCallRoom(users[data.otherUser]);
                        voiceUser.socketUsedForCall = socket;
                        let participant = new CallParticipant(username, voiceUser);
                        voiceUser.peerId = data.peerId;
                        peerSockets[data.peerId].socketId = socket.id;
                        voiceUser.callRoom.AddParticipant(participant);
                    }
                }
            }
        });
        socket.on("reject-call", function (data) {

        });
        socket.on("join-room", function (data) {
            console.log(data);
        });

        socket.on("disconnect", function () {
            RemoveSocketConnection(socket.id);
        });

    });

    function calUser(callerUsername = "", userToCall = "", voiceUser = new VoiceUser()) {
        console.log(callerUsername);
        if (users.hasOwnProperty(userToCall)) {
            var voiceUserToCall = new VoiceUser(); voiceUserToCall = users[userToCall];
            if (voiceUserToCall.callRoom == null) {
                console.log("callibng use " + userToCall);
                if (!voiceUserToCall.incomingCalls.includes(callerUsername)) {
                    voiceUserToCall.emitCalls(usersSocketsConnectedToService[userToCall], io, callerUsername, voiceUserToCall, { "username": callerUsername });
                    voiceUser.usersImCalling.push(userToCall);
                }
            }
        }
        else {
            console.log("No  user to call");
        }
    }

    function startCallRoom(callerVoiceUser = new VoiceUser()) {
        let initialCaller = new CallParticipant(callerVoiceUser.username, callerVoiceUser);
        let room = new CallRoom(initialCaller);
        room.AddParticipant(initialCaller);
        callerVoiceUser.callRoom = room;
        return room;
    }

    function AddSocketConnection(socketId, username = "") {
        if (!usersSocketsConnectedToService.hasOwnProperty(username)) {
            usersSocketsConnectedToService[username] = username;
            usersSocketsConnectedToService[username] = [];
            usersSocketsConnectedToService[username].push(socketId);
        }
        else {
            var socketArray = []; socketArray = usersSocketsConnectedToService[username];
            socketArray.push(socketId);
        }
        if (!socketConnections.hasOwnProperty(socketId)) {
            socketConnections[socketId] = username;
        }

        if (!users.hasOwnProperty(username)) {
            users[username] = username;
            users[username] = new VoiceUser(username);
            console.log(users[username]);
        }

        // console.log(usersSocketsConnectedToService);
        return {

        }
    }
    function RemoveSocketConnection(socketId) {
        var username = "";
        if (socketConnections.hasOwnProperty(socketId)) {
            username = socketConnections[socketId];
            delete socketConnections[socketId];
        }
        console.log("removing - " + username);
        if (usersSocketsConnectedToService.hasOwnProperty(username)) {
            var socketArray = []; socketArray = usersSocketsConnectedToService[username];
            if (socketArray.includes(socketId, 0)) {
                // console.log(socketArray.indexOf(socket));
                socketArray.splice(socketArray.indexOf(socketId), 1);
                usersSocketsConnectedToService[username] = socketArray;
            }
            if (socketArray.length == 0) {
                delete usersSocketsConnectedToService[username];
                if (users.hasOwnProperty(username)) {
                    console.log(users[username].incomingCalls);
                    users[username].incomingCalls = [];
                    console.log(users[username].incomingCalls);
                    if (users[username].interval != null) {
                        clearInterval(users[username].interval);
                    }
                    delete users[username];
                }
            }
        }
        console.log(usersSocketsConnectedToService);
        console.log(socketConnections);
        console.log(users);
    }
}