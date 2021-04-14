const soungA = new Audio('mp3/soungA.mp3');
const soungB = new Audio('mp3/soungB.mp3');
const soungC = new Audio('mp3/soungC.mp3');
const soungD = new Audio('mp3/soungD.mp3');

const letterA = document.querySelector('#letterA');
const letterB = document.querySelector('#letterB');
const letterC = document.querySelector('#letterC');
const letterD = document.querySelector('#letterD');


letterA.addEventListener('click', event => {
    soungA.currentTime = 0;
    soungA.paused ? soungA.play() : soungA.pause();
});

letterB.addEventListener('click', event => {
    soungB.currentTime = 0;
    soungB.paused ? soungB.play() : soungB.pause();
});

letterC.addEventListener('click', event => {
    soungC.currentTime = 0;
    soungC.paused ? soungC.play() : soungC.pause();
});

letterD.addEventListener('click', event => {
    soungA.currentTime = 0;
    soungD.paused ? soungD.play() : soungD.pause();
});


document.addEventListener('keypress', event => {
    switch (event.key) {
        case 'a': 
            soungA.currentTime = 0;
            soungA.paused ? soungA.play() : soungA.pause();
            break;
        case 'b':
            soungB.currentTime = 0;
            soungB.paused ? soungB.play() : soungB.pause();
            break;
        case 'c':
            soungC.currentTime = 0;
            soungC.paused ? soungC.play() : soungC.pause();
            break;
        case 'd':
            soungD.currentTime = 0;
            soungD.paused ? soungD.play() : soungD.pause();
            break;
    };   
});
