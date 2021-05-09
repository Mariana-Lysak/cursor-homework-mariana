const soungA = new Audio('mp3/soungA.mp3');
const soungB = new Audio('mp3/soungB.mp3');
const soungC = new Audio('mp3/soungC.mp3');
const soungD = new Audio('mp3/soungD.mp3');

const letterA = document.getElementById('letterA');
const letterB = document.getElementById('letterB');
const letterC = document.getElementById('letterC');
const letterD = document.getElementById('letterD');

const letters = document.querySelectorAll('div');
const soungs = [];
soungs.push(soungA, soungB, soungC, soungD);

function removeLetters() {
    for(let i = 0; i < letters.length; i++) {
        letters[i].classList.remove('active');
        soungs[i].pause();
    }
}

letterA.addEventListener('click', event => {
    removeLetters();
    letterA.classList.add('active');
    soungA.currentTime = 0;
    soungA.play();
});

letterB.addEventListener('click', event => {
    removeLetters();
    letterB.classList.add('active');
    soungB.currentTime = 0;
    soungB.play();
});

letterC.addEventListener('click', event => {
    removeLetters();
    letterC.classList.add('active');
    soungC.currentTime = 0;
    soungC.play();
});

letterD.addEventListener('click', event => {
    removeLetters();
    letterD.classList.add('active');
    soungD.currentTime = 0;
    soungD.play();
});


document.addEventListener('keypress', playSoung);

function playSoung() {
    switch (event.code) {
        case 'KeyA':
            removeLetters();
            letterA.classList.add('active');
            soungA.currentTime = 0;
            soungA.play();
            break;
        case 'KeyB':
            removeLetters();
            letterB.classList.add('active');
            soungB.currentTime = 0;
            soungB.play();
            break;
        case 'KeyC':
            removeLetters();
            letterC.classList.add('active');
            soungC.currentTime = 0;
            soungC.play();
            break;
        case 'KeyD':
            removeLetters();
            letterD.classList.add('active');
            soungD.currentTime = 0;
            soungD.play();
            break;
    };   
};

export {
    removeLetters,
}