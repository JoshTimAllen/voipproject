import { Server, Socket } from "socket.io";
import { v4 } from "uuid";
import { CallData } from "../.shared/sharedmodels.js";
var uuidV4 = v4;
export class CallRoom {
    constructor(initialCaller = new CallParticipant("", null), io) {
        this.initialCaller = initialCaller;
        this.participants = [initialCaller]; this.participants = [];
        this.io = io;
        this.roomId = uuidV4();
    }
    calldata = new CallData();
    AddParticipant(participant = new CallParticipant) {
        if (participant == null) { return; }
        if (this.participants.some(x => x.username == participant.username)) { return; }
        this.participants.push(participant);
        participant.voiceUser.socketUsedForCall.join(this.roomId);
        console.log(participant.voiceUser.socketUsedForCall.rooms);
        this.participants.forEach(otherParticipant => {
            participant.voiceUser.socketUsedForCall.emit('user-connected', otherParticipant.voiceUser.peerId);

        });
        participant.voiceUser.socketUsedForCall.broadcast.emit('user-connected', participant.voiceUser.peerId);

        participant.voiceUser.socketUsedForCall.broadcast.emit("call-data", this.calldata);
        participant.voiceUser.socketUsedForCall.emit("call-data", this.calldata);
    }
    RemoveParticipant(participant = new CallParticipant) {
        participant.voiceUser.socketUsedForCall.broadcast.emit()
        if (!this.participants.some(x => x.username == participant.username)) { return; }
        this.participants.splice(this.participants.indexOf(this.participants.find(x => x.username == participant.username)), 0);

        participant.voiceUser.socketUsedForCall.broadcast.emit("call-data", this.calldata);
        participant.voiceUser.socketUsedForCall.emit("call-data", this.calldata);
    }
    SendVoice(fromParticipantUsername = "", data) {
        var newData = data.split(";");
        newData[0] = "data:audio/ogg;";
        newData = newData[0] + newData[1];
        this.participants.find(x => x.username == fromParticipantUsername)[0].voiceUser.socketUsedForCall.broadcast.emit("voice", fromParticipantUsername, newData);
    }
}
export class CallParticipant {
    constructor(username = "", voiceUser = new VoiceUser(null)) {
        this.username = username;
        this.voiceUser = voiceUser;
        // try {
        //     this.socketConnection = new Socket;
        // }
        // catch { }

    }
}
export class VoiceUser {
    constructor(username = "") {
        this.username = username;
        this.callRoom = null;
        try {
            this.socketUsedForCall = new Socket;
        }
        catch { }
    }
    callRoom = new CallRoom(null);
    incomingCalls = [];
    usersImCalling = [];
    interval = null;
    peerId = "";

    startCallUser(webSockets, io, callerUsername, user, data) {

    }
    stopCallUser(webSockets, io, callerUsername, user, data) {

    }

    emitCalls(webSockets, io, callerUsername, user, data) {

        if (!this.incomingCalls.includes(callerUsername)) {
            this.incomingCalls.push(callerUsername);
        }
        else {
            return;
        }
        this.interval = setInterval(() => {
            if (user.incomingCalls.includes(callerUsername)) {
                webSockets.forEach(userWebSocket => {
                    console.log("Sending incoming call");
                    console.log(callerUsername);
                    console.log("//////////////////");
                    io.sockets.sockets.get(userWebSocket).emit("incomingcalls-update", { "incomingCalls": this.incomingCalls });
                });
            }
            else {
                if (this.interval != null) {
                    clearInterval(this.interval);
                }
            }
            if (this.incomingCalls.length == 0) {
                if (this.interval != null) {
                    clearInterval(this.interval);
                }
            }
            console.log("Broadcasting call");
        }, 2000);
        // userWebSocket.emit("incomingcall", username);
    }
}