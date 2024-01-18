// const userStatus = {
//     microphone: false,
//     mute: false,
//     username: "user#" + Math.floor(Math.random() * 999999),
//     online: false,
// };

// const usernameInput = document.getElementById("username");
// const usernameLabel = document.getElementById("username-label");
// const usernameDiv = document.getElementById("username-div");
// const usersDiv = document.getElementById("users");

// usernameInput.value = userStatus.username;
// usernameLabel.innerText = userStatus.username;

// window.onload = (e) => {
//     mainFunction(300);
// };

// var socket = io("ws://localhost:3000");
// socket.emit("userInformation", userStatus);

// function mainFunction(time) {
//     navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//             var madiaRecorder = new MediaRecorder(stream);
//             madiaRecorder.start();

//             var audioChunks = [];

//             madiaRecorder.addEventListener(
//                 "dataavailable",
//                 function (event) {
//                     audioChunks.push(event.data);
//                 },
//             );

//             madiaRecorder.addEventListener("stop", function () {
//                 var audioBlob = new Blob(audioChunks);

//                 audioChunks = [];

//                 var fileReader = new FileReader();
//                 fileReader.readAsDataURL(audioBlob);
//                 fileReader.onloadend = function () {
//                     if (!userStatus.microphone || !userStatus.online)
//                         return;

//                     var base64String = fileReader.result;
//                     socket.emit("voice", base64String);
//                 };

//                 madiaRecorder.start();

//                 setTimeout(function () {
//                     madiaRecorder.stop();
//                 }, time);
//             });

//             setTimeout(function () {
//                 madiaRecorder.stop();
//             }, time);
//         });

//     socket.on("send", function (data) {
//         var audio = new Audio(data);
//         audio.play();
//     });

//     socket.on("usersUpdate", function (data) {
//         usersDiv.innerHTML = "";
//         for (const key in data) {
//             if (!Object.hasOwnProperty.call(data, key)) continue;

//             const element = data[key];
//             const li = document.createElement("li");
//             li.innerText = element.username;
//             usersDiv.append(li);
//         }
//     });
// }

// usernameLabel.onclick = function () {
//     usernameDiv.style.display = "block";
//     usernameLabel.style.display = "none";
// };

// function changeUsername() {
//     userStatus.username = usernameInput.value;
//     usernameLabel.innerText = userStatus.username;
//     usernameDiv.style.display = "none";
//     usernameLabel.style.display = "block";
//     emitUserInformation();
// }

// function toggleConnection(e) {
//     userStatus.online = !userStatus.online;

//     editButtonClass(e, userStatus.online);
//     emitUserInformation();
// }

// function toggleMute(e) {
//     userStatus.mute = !userStatus.mute;

//     editButtonClass(e, userStatus.mute);
//     emitUserInformation();
// }

// function toggleMicrophone(e) {
//     userStatus.microphone = !userStatus.microphone;
//     editButtonClass(e, userStatus.microphone);
//     emitUserInformation();
// }

// function editButtonClass(target, bool) {
//     const classList = target.classList;
//     classList.remove("enable-btn");
//     classList.remove("disable-btn");

//     if (bool) return classList.add("enable-btn");

//     classList.add("disable-btn");
// }

// function emitUserInformation() {
//     socket.emit("userInformation", userStatus);
// }
var audio = document.querySelector("audio");

var socket = io("ws://localhost:3000");

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
        alert("This browser does not supports WebRTC getUserMedia API.");

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
        .then((stream) => {
            var madiaRecorder = new MediaRecorder(stream);
            madiaRecorder.start();

            var audioChunks = [];

            madiaRecorder.addEventListener(
                "dataavailable",
                function (event) {
                    audioChunks.push(event.data);
                },
            );

            madiaRecorder.addEventListener("stop", function () {
                var audioBlob = new Blob(audioChunks);

                audioChunks = [];

                var fileReader = new FileReader();
                fileReader.readAsDataURL(audioBlob);
                fileReader.onloadend = function () {
                    if (!userStatus.microphone || !userStatus.online)
                        return;

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
        })
        .catch(function (error) {
            alert(
                "Unable to capture your microphone. Please check console logs.",
            );
            console.error(error);
        });
}

socket.on("send", function (data) {
    var audio = new Audio(data);
    audio.play();
});

socket.on("usersUpdate", function (data) {
    usersDiv.innerHTML = "";
    for (const key in data) {
        if (!Object.hasOwnProperty.call(data, key)) continue;

        const element = data[key];
        const li = document.createElement("li");
        li.innerText = element.username;
        usersDiv.append(li);
    }
});

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
    }, 1000);

    audio.play();

    btnDownloadRecording.disabled = false;

    if (isSafari) {
        click(btnReleaseMicrophone);
    }
}

var isEdge =
    navigator.userAgent.indexOf("Edge") !== -1 &&
    (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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
        navigator.platform.toString().toLowerCase().indexOf("win") === -1
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
        _window.document.execCommand("SaveAs", true, fileName || fileURL);
        _window.close();
    }
}