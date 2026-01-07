var audio = document.getElementById("audioPlayer");
var video = document.getElementById("videoPlayer");

var audioTime = document.getElementById("audioTime");
var videoTime = document.getElementById("videoTime");

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return minutes + ":" + (secs < 10 ? "0" + secs : secs);
}

audio.addEventListener("timeupdate", function () {
    audioTime.textContent = "Current Time: " + formatTime(audio.currentTime);
});

video.addEventListener("timeupdate", function () {
    videoTime.textContent = "Current Time: " + formatTime(video.currentTime);
});
