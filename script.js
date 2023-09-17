document.getElementById('aumentar').addEventListener('click', function () {
    changeFontSize(1);
});


document.getElementById('diminuir').addEventListener('click', function () {
    changeFontSize(-1);
});

function changeFontSize(step) {
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    var newFontSize = currentFontSize + step;
    document.body.style.fontSize = newFontSize + 'px';
    
}

const animatedGif = document.getElementById("animated-gif");
const pauseButton = document.getElementById("pause-button");
let isPaused = false;
let gifSrc = animatedGif.scr;

pauseButton.addEventListener("click", () => {
    if(isPaused) {
        animatedGif.src = gifSrc;
        pauseButton.textContent = "Pause";
    } else{
        gifSrc = animatedGif.src;
        animatedGif.src = "";
        pauseButton.textContent = "Play";
    }
    isPaused = !isPaused
});



const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const volumeSlider = document.getElementById('volumeSlider');

audio.play();



playPauseButton.addEventListener('click', () => {


    if (audio.paused) {

    audio.play();

    } else {

    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; playPauseButton.innerHTML = '<i class="fas fa-play"></i>';

    audio.pause();
    }

    });


    volumeSlider.addEventListener('input', () => { audio.volume = volumeSlider.value;



    });