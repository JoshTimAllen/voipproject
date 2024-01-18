<!-- <script>
    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    // onMount(async () => {
    const userStatus = {
        microphone: false,
        mute: false,
        username: "user#" + Math.floor(Math.random() * 999999),
        online: false,
    };

    window.onload = (e) => {
        mainFunction(300);
    };

    var socket = io("ws://localhost:3000");
    socket.emit("userInformation", userStatus);

    function mainFunction(time) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            var madiaRecorder = new MediaRecorder(stream);
            madiaRecorder.start();

            var audioChunks = [];

            madiaRecorder.addEventListener("dataavailable", function (event) {
                audioChunks.push(event.data);
            });

            madiaRecorder.addEventListener("stop", function () {
                var audioBlob = new Blob(audioChunks);

                audioChunks = [];

                var fileReader = new FileReader();
                fileReader.readAsDataURL(audioBlob);
                fileReader.onloadend = function () {
                    if (!userStatus.microphone || !userStatus.online) return;

                    var base64String = fileReader.result;
                    socket.emit("voice", base64String);
                };

                madiaRecorder.start();

                setTimeout(function () {
                    madiaRecorder.stop();
                }, time);
            });

            setTimeout(function () {
                madiaRecorder.stop();
            }, time);
        });

        socket.on("send", function (data) {
            var audio = new Audio(data);
            audio.play();
        });

        // socket.on("usersUpdate", function (data) {
        //     usersDiv.innerHTML = "";
        //     for (const key in data) {
        //         if (!Object.hasOwnProperty.call(data, key)) continue;

        //         const element = data[key];
        //         const li = document.createElement("li");
        //         li.innerText = element.username;
        //         usersDiv.append(li);
        //     }
        // });
    }
    // toggleConnection(null);
    // toggleMicrophone(null);
    function toggleConnection(e) {
        userStatus.online = !userStatus.online;
        emitUserInformation();
    }

    function toggleMute(e) {
        userStatus.mute = !userStatus.mute;
        emitUserInformation();
    }

    function toggleMicrophone(e) {
        userStatus.microphone = !userStatus.microphone;
        emitUserInformation();
    }

    function emitUserInformation() {
        socket.emit("userInformation", userStatus);
    }
    // });
</script> -->

<!-- <header>
    <div class="user-controller">
        <p id="username-label"></p>
        <div id="username-div">
            <input type="text" id="username" />
            <button class="username-btn" onclick="changeUsername()"
                >Change username</button
            >
        </div>
    </div>

    <div class="controller">
        <button class="control-btn disable-btn" on:input={toggleMicrophone}
            >Open microphone</button
        >
        <button class="control-btn disable-btn" on:input={toggleMute}
            >Mute</button
        >
        <button
            class="control-btn disable-btn"
            on:input={toggleConnection(this)}>Go online</button
        >
    </div>
</header>
<h2>users list</h2>
<ul class="users" id="users"></ul> -->

<!-- <script>
    import { onMount } from "svelte";

    let media = [];
    let mediaRecorder = null;
    onMount(async () => {
        var audio = document.querySelector("audio");

        function captureMicrophone(callback) {
            btnReleaseMicrophone.disabled = false;

            if (microphone) {
                callback(microphone);
                return;
            }

            if (
                typeof navigator.mediaDevices === "undefined" ||
                !navigator.mediaDevices.getUserMedia
            ) {
                alert(
                    "This browser does not supports WebRTC getUserMedia API.",
                );

                if (!!navigator.getUserMedia) {
                    alert(
                        "This browser seems supporting deprecated getUserMedia API.",
                    );
                }
            }

            navigator.mediaDevices
                .getUserMedia({
                    audio: isEdge
                        ? true
                        : {
                              echoCancellation: false,
                          },
                })
                .then(function (mic) {
                    callback(mic);
                })
                .catch(function (error) {
                    alert(
                        "Unable to capture your microphone. Please check console logs.",
                    );
                    console.error(error);
                });
        }

        function replaceAudio(src) {
            var newAudio = document.createElement("audio");
            newAudio.controls = true;
            newAudio.autoplay = true;

            if (src) {
                newAudio.src = src;
            }

            var parentNode = audio.parentNode;
            parentNode.innerHTML = "";
            parentNode.appendChild(newAudio);

            audio = newAudio;
        }

        function stopRecordingCallback() {
            replaceAudio(URL.createObjectURL(recorder.getBlob()));

            btnStartRecording.disabled = false;

            setTimeout(function () {
                if (!audio.paused) return;

                setTimeout(function () {
                    if (!audio.paused) return;
                    audio.play();
                }, 1000);

                audio.play();
            }, 300);

            audio.play();

            btnDownloadRecording.disabled = false;

            if (isSafari) {
                click(btnReleaseMicrophone);
            }
        }

        var isEdge =
            navigator.userAgent.indexOf("Edge") !== -1 &&
            (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);
        var isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent,
        );

        var recorder; // globally accessible
        var microphone;

        var btnStartRecording = document.getElementById("btn-start-recording");
        var btnStopRecording = document.getElementById("btn-stop-recording");
        var btnReleaseMicrophone = document.querySelector(
            "#btn-release-microphone",
        );
        var btnDownloadRecording = document.getElementById(
            "btn-download-recording",
        );

        btnStartRecording.onclick = function () {
            this.disabled = true;
            this.style.border = "";
            this.style.fontSize = "";

            if (!microphone) {
                captureMicrophone(function (mic) {
                    microphone = mic;

                    if (isSafari) {
                        replaceAudio();

                        audio.muted = false;
                        audio.srcObject = microphone;

                        btnStartRecording.disabled = false;
                        btnStartRecording.style.border = "1px solid red";
                        btnStartRecording.style.fontSize = "150%";

                        alert(
                            "Please click startRecording button again. First time we tried to access your microphone. Now we will record it.",
                        );
                        return;
                    }

                    click(btnStartRecording);
                });
                return;
            }

            replaceAudio();

            audio.muted = false;
            audio.srcObject = microphone;

            var options = {
                type: "audio",
                numberOfAudioChannels: isEdge ? 1 : 2,
                checkForInactiveTracks: true,
                bufferSize: 16384,
            };

            if (isSafari || isEdge) {
                options.recorderType = StereoAudioRecorder;
            }

            if (
                navigator.platform &&
                navigator.platform.toString().toLowerCase().indexOf("win") ===
                    -1
            ) {
                options.sampleRate = 48000; // or 44100 or remove this line for default
            }

            if (isSafari) {
                options.sampleRate = 44100;
                options.bufferSize = 4096;
                options.numberOfAudioChannels = 2;
            }

            if (recorder) {
                recorder.destroy();
                recorder = null;
            }

            recorder = RecordRTC(microphone, options);

            recorder.startRecording();

            btnStopRecording.disabled = false;
            btnDownloadRecording.disabled = true;
        };

        btnStopRecording.onclick = function () {
            this.disabled = true;
            recorder.stopRecording(stopRecordingCallback);
        };

        btnReleaseMicrophone.onclick = function () {
            this.disabled = true;
            btnStartRecording.disabled = false;

            if (microphone) {
                microphone.stop();
                microphone = null;
            }

            if (recorder) {
                // click(btnStopRecording);
            }
        };

        btnDownloadRecording.onclick = function () {
            this.disabled = true;
            if (!recorder || !recorder.getBlob()) return;

            if (isSafari) {
                recorder.getDataURL(function (dataURL) {
                    SaveToDisk(dataURL, getFileName("mp3"));
                });
                return;
            }

            var blob = recorder.getBlob();
            var file = new File([blob], getFileName("mp3"), {
                type: "audio/mp3",
            });
            invokeSaveAsDialog(file);
        };

        function click(el) {
            el.disabled = false; // make sure that element is not disabled
            var evt = document.createEvent("Event");
            evt.initEvent("click", true, true);
            el.dispatchEvent(evt);
        }

        function getRandomString() {
            if (
                window.crypto &&
                window.crypto.getRandomValues &&
                navigator.userAgent.indexOf("Safari") === -1
            ) {
                var a = window.crypto.getRandomValues(new Uint32Array(3)),
                    token = "";
                for (var i = 0, l = a.length; i < l; i++) {
                    token += a[i].toString(36);
                }
                return token;
            } else {
                return (Math.random() * new Date().getTime())
                    .toString(36)
                    .replace(/\./g, "");
            }
        }

        function getFileName(fileExtension) {
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var date = d.getDate();
            return (
                "RecordRTC-" +
                year +
                month +
                date +
                "-" +
                getRandomString() +
                "." +
                fileExtension
            );
        }

        function SaveToDisk(fileURL, fileName) {
            // for non-IE
            if (!window.ActiveXObject) {
                var save = document.createElement("a");
                save.href = fileURL;
                save.download = fileName || "unknown";
                save.style = "display:none;opacity:0;color:transparent;";
                (document.body || document.documentElement).appendChild(save);

                if (typeof save.click === "function") {
                    save.click();
                } else {
                    save.target = "_blank";
                    var event = document.createEvent("Event");
                    event.initEvent("click", true, true);
                    save.dispatchEvent(event);
                }

                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            }

            // for IE
            else if (!!window.ActiveXObject && document.execCommand) {
                var _window = window.open(fileURL, "_blank");
                _window.document.close();
                _window.document.execCommand(
                    "SaveAs",
                    true,
                    fileName || fileURL,
                );
                _window.close();
            }
        }
    });
</script>

<section>
    <title>Audio Recording | RecordRTC</title>
    <h1>Simple Audio Recording using RecordRTC</h1>
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
    />

    <br />

    <button id="btn-start-recording">Start Recording</button>
    <button id="btn-stop-recording" disabled>Stop Recording</button>
    <button id="btn-release-microphone" disabled>Release Microphone</button>
    <button id="btn-download-recording" disabled>Download</button>

    <hr />
    <div><audio controls autoplay playsinline></audio></div>
</section>

<footer style="margin-top: 20px;"><small id="send-message"></small></footer>

<style>
    html,
    body {
        margin: 0 !important;
        padding: 0 !important;
    }
</style> -->

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .controller {
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    body {
        display: flex;
        text-align: center;
        flex-flow: column;
        margin: 0;
        padding: 0;
        background-color: rgb(12 11 25);
        color: #fff;
    }

    header {
        margin: 0;
        padding: 20px 0;
        width: 100%;
        height: fit-content;
        background-color: rgb(15, 15, 44);
        color: #fff;
    }

    .control-btn {
        width: 120px;
        padding: 10px 0;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .enable-btn {
        background-color: rgb(26, 184, 26);
        color: #fff;
        border-bottom: 5px solid rgb(18, 131, 18);
        margin: 10px;
    }

    .enable-btn:hover {
        border-bottom: none;
        margin-top: 15px;
    }

    .disable-btn {
        margin: 10px;
        background-color: rgb(172, 25, 25);
        color: #fff;
        border-bottom: 5px solid rgb(184, 57, 57);
    }

    .disable-btn:hover {
        border-bottom: none;
        margin-top: 15px;
    }

    .username-btn {
        width: 200px;
        margin: 10px auto;
        padding: 10px 0;
    }

    input {
        width: 200px;
        padding: 10px;
        margin: 10px auto;
    }

    #username-div {
        display: none;
    }

    #username-label {
        width: 200px;
        height: fit-content;
        margin: 0 auto;
        padding: 10px 20px;
        background-color: rgb(12 11 25);
        border-radius: 8px;
        border: 2px solid rgb(26, 26, 77);
        cursor: pointer;
    }

    ul.users {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    ul.users li {
        width: 90%;
        margin: 10px auto;
        padding: 10px 0;
        text-align: center;
        background-color: rgb(15 15 44);
        list-style: none;
        color: #fff;
        border-radius: 8px;
    }
</style>
