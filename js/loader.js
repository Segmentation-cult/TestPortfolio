var miniProfile = document.getElementById('miniProfile');
miniProfile.style.opacity = 0;
var video = document.getElementById('portfolio-video');
video.childNodes[1].src = "assets/videos/Portfolio.mp4";

video.load();


video.addEventListener('loadeddata', function() {
    // Video is loaded and can be played
    var videoLoader = document.getElementById('videoLoader');
    videoLoader.style.animation = 'fadeOut 1s ease-in-out forwards';
    
    miniProfile.style.animation = 'fadeIn 1s ease-in-out forwards';
}, false);