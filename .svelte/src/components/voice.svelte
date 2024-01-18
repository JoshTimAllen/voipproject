<script>
    import { CallData } from "../.shared/sharedmodels.js";
    CallData;
    import Callview from "./callview.svelte";
    import Incomingcall from "./messaging-components/incomingcall.svelte";
    import { onMount } from "svelte";
    import { Peer } from "https://esm.sh/peerjs@1.5.2?bundle-deps";
    export let val = "hjbhjkhkjkjhkjhjklhkljklhjkl";
    export let incomingCalls = ["jkkjl;llllllll"];
    let incomingCallsTimeOut = {};
    export const event = new CustomEvent("event");
    export let calldata = new CallData();
    var socket = io("/", {
        // extraHeaders: {
        //     auth: document.cookie,
        // },
    });
    var peer;

    export const Call = (callerUserName = "") => {
        var calldata = {
            userToCall: callerUserName,
            peerId: peer.id,
        };
        socket.emit("call", calldata);
    };
    export let Answer = (userToAnswer = "") => {
        var calldata = {
            otherUser: userToAnswer,
            peerId: peer.id,
        };
        socket.emit("answer-call", calldata);
    };
    export let Reject = (userToReject = "") => {
        var calldata = {
            otherUser: userToReject,
        };
        socket.emit("reject-call", calldata);
    };
    export const LeaveCall = () => {
        var calldata = {};
        socket.emit("leave-call", calldata);
    };

    var audioQueue = [];
    // audioQueue.slice(0, 1);
    onMount(async () => {
        // let peer = new Peer(undefined, {
        //     host: "/",
        //     port: 3001,
        // });

        // console.log("peer - ");
        // peer.on("open", (id) => {
        //     console.log("peer - " + id);
        // });
        mainFunction(500);
        function mainFunction(time) {
            // navigator.mediaDevices
            //     .getUserMedia({ audio: true })
            //     .then((stream) => {
            //         var madiaRecorder = new MediaRecorder(stream);
            //         madiaRecorder.start();

            //         var audioChunks = [];

            //         madiaRecorder.addEventListener(
            //             "dataavailable",
            //             function (event) {
            //                 audioChunks.push(event.data);
            //             },
            //         );

            //         madiaRecorder.addEventListener("stop", function () {
            //             var audioBlob = new Blob(audioChunks);

            //             audioChunks = [];

            //             var fileReader = new FileReader();
            //             fileReader.readAsDataURL(audioBlob);
            //             fileReader.onloadend = function () {
            //                 console.log("dsisid");
            //                 // if (!userStatus.microphone || !userStatus.online)
            //                 //     return;

            //                 var base64String = fileReader.result;
            //                 socket.emit("voice", base64String);
            //             };
            //             madiaRecorder.start();

            //             setTimeout(function () {
            //                 madiaRecorder.stop();
            //             }, time);
            //         });

            //         setTimeout(function () {
            //             madiaRecorder.stop();
            //         }, time);
            //     });

            const socket = io("/");
            peer = new Peer(undefined, {
                host: "/",
                port: "3001",
            });

            var audios = {};

            // const myVideo = document.createElement("video");
            // myVideo.muted = true;
            const peers = {};
            const myaudio = new Audio();
            navigator.mediaDevices
                .getUserMedia({
                    audio: true,
                })
                .then((stream) => {
                    myaudio.srcObject = stream;
                    myaudio.addEventListener("loadedmetadata", () => {
                        myaudio.play();
                    });
                    // addVideoStream(myVideo, stream);

                    peer.on("call", (call) => {
                        call.answer(stream);
                        const audio = new Audio();
                        call.on("stream", (userVideoStream) => {
                            addVideoStream(audio, userVideoStream);
                        });
                    });
                    peer.on("error", function (err) {
                        console.log(err);
                    });
                    socket.on("user-connected", (userId) => {
                        console.log("connecting to other user - " + userId);
                        connectToNewUser(userId, stream);
                    });
                })
                .catch((reason) => {
                    console.log(reason);
                });

            // navigator.mediaDevices.getUserMedia(
            //     { audio: true },
            //     (stream) => {
            //         myaudio.srcObject = stream;
            //         myaudio.play();
            //         const call = peer.call("another-peers-id", stream);
            //         call.on("stream", (remoteStream) => {
            //             // Show stream in some <video> element.
            //         });
            //     },
            //     (err) => {
            //         console.error("Failed to get local stream", err);
            //     },
            // );

            socket.on("user-disconnected", (userId) => {
                if (peers[userId]) peers[userId].close();
            });

            peer.on("open", (id) => {
                console.log("myid - " + id);
            });

            function connectToNewUser(userId, stream) {
                if (userId == peer.id) {
                    return;
                }
                const call = peer.call(userId, stream);
                const audio = new Audio();
                call.on("stream", (userVideoStream) => {
                    addVideoStream(audio, userVideoStream);
                });
                call.on("close", () => {
                    audio.remove();
                });

                peers[userId] = call;
            }

            function addVideoStream(audio, stream) {
                audio.srcObject = stream;
                audio.addEventListener("loadedmetadata", () => {
                    audio.play();
                });
            }

            socket.on("incomingcalls-update", function (data) {
                incomingCalls = data.incomingCalls;
                data.incomingCalls.forEach((callerUsername) => {
                    if (!incomingCalls.includes(callerUsername)) {
                        incomingCalls.push(callerUsername);
                        incomingCalls = incomingCalls;
                        if (
                            !incomingCallsTimeOut.hasOwnProperty(callerUsername)
                        ) {
                            incomingCallsTimeOut[callerUsername] = Date.now();

                            let timeOutInterval = setInterval(() => {
                                console.log(
                                    Date.now() -
                                        incomingCallsTimeOut[callerUsername],
                                );
                            }, 5000);
                        }
                    } else {
                        if (
                            incomingCallsTimeOut.hasOwnProperty(callerUsername)
                        ) {
                            incomingCallsTimeOut[callerUsername] = Date.now();
                        }
                    }
                });

                // incomingCalls = incomingCalls;
            });

            socket.on("message", function (data) {
                console.log(data);
                // incomingCalls.push(data);
            });
            socket.on("call-data", function (data) {
                calldata = data;
            });

            socket.on("connect_error", (err) => {
                console.log(`connect_error due to ${err.message}`);
            });
        }
    });
    var ableToPlayNew = true;
    setInterval(function () {
        if (ableToPlayNew) {
            audioPlay();
        }
    }, 100);
    function audioPlay() {
        if (ableToPlayNew) {
            if (audioQueue.length != 0) {
                let audio = new Audio(audioQueue.splice(0, 1)[0]);

                audio.addEventListener(
                    "ended",
                    function () {
                        ableToPlayNew = true;
                        audioPlay();
                    },
                    false,
                );
                audio.play();
                ableToPlayNew = false;
            }
        }
    }
    // });
</script>

{#each incomingCalls as incomingcall}
    <svelte:component
        this={Incomingcall}
        callerUserName={incomingcall}
        bind:Answer
        bind:Decline={Reject}
    />
{/each}

<svelte:component
    this={Callview}
    bind:calldata
    bind:Answer
    bind:Decline={Reject}
/>
