// MODAL
var videoBtn1 = document.getElementById('videoBtn1');
var videoBtn2 = document.getElementById('videoBtn2');
var modalVideo = document.getElementById('video-modal');
var overlay = document.getElementById('video-modal__overlay');
var videoPlayer = document.getElementById('video-player');




// MODAL-VIDEO
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}
// The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {    
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
videoBtn1.addEventListener('click', function () {
  modalVideo.classList.add('active');
  player.playVideo();
});
videoBtn2.addEventListener('click', function () {
  modalVideo.classList.add('active');
  player.playVideo();
});
function closeModal() {
  modalVideo.classList.remove('active');
  player.stopVideo();
}
overlay.addEventListener('click', closeModal);


