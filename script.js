let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('Audio/1.mp3');
play.addEventListener('click',() => {
    if(audio.paused || audio.currentTime == 0) {
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    } else {
        audio.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
});

audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime/audio.duration)*100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #21a600 ${progress}%, #333 ${progress}%)`;
})

progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #21a600 ${value}%, #333 ${value}%)`;
});