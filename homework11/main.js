const soungA = new Audio('mp3/soungA.mp3');
const soungB = new Audio('mp3/soungB.mp3');
const soungC = new Audio('mp3/soungC.mp3');
const soungD = new Audio('mp3/soungD.mp3');

const letterA = document.getElementById('letterA');
const letterB = document.getElementById('letterB');
const letterC = document.getElementById('letterC');
const letterD = document.getElementById('letterD');

letterA.addEventListener('click', event => {
    letterA.classList.toggle('active');
    soungA.currentTime = 0;
    soungA.paused ? soungA.play() : soungA.pause();
});

letterB.addEventListener('click', event => {
    letterB.classList.toggle('active');
    soungB.currentTime = 0;
    soungB.paused ? soungB.play() : soungB.pause();
});

letterC.addEventListener('click', event => {
    letterC.classList.toggle('active');
    soungC.currentTime = 0;
    soungC.paused ? soungC.play() : soungC.pause();
});

letterD.addEventListener('click', event => {
    letterD.classList.toggle('active');
    soungD.currentTime = 0;
    soungD.paused ? soungD.play() : soungD.pause();
});


document.addEventListener('keypress', playSoung);

function playSoung() {
    switch (event.key) {
        case 'a':
            letterA.classList.toggle('active');
            soungA.currentTime = 0;
            soungA.paused ? soungA.play() : soungA.pause();
            break;
        case 'b':
            letterB.classList.toggle('active');
            soungB.currentTime = 0;
            soungB.paused ? soungB.play() : soungB.pause();
            break;
        case 'c':
            letterC.classList.toggle('active');
            soungC.currentTime = 0;
            soungC.paused ? soungC.play() : soungC.pause();
            break;
        case 'd':
            letterD.classList.toggle('active');
            soungD.currentTime = 0;
            soungD.paused ? soungD.play() : soungD.pause();
            break;
    };   
};