const startElement = document.querySelector('#start');
const stopElement = document.querySelector('#stop');
const resetElement = document.querySelector('#reset');

let stopwatch = document.querySelector('#stopwatch');

let startTime = null;
let endTime = null;
let interalTimer = null;
let timer = 0;
let seconds = 00;
let minutes = 00;
let hours = 00;

const makeTwoDigits = (n) => n < 10 ? `0${n}`: `${n}`;

startElement.addEventListener('click', () => {
    console.log("time started...");
    stopwatch.innerHTML = `00:00:00`
    const time = new Date();
    stopwatch.innerHTML = ``;
    interalTimer = setInterval(() => {
        timer++;
        if(timer % 60 == 0) {
            minutes = timer / 60;
        }
        if(minutes % 60 ==0) {
            hours = minutes /60;
        }
        if(timer < 60) {
            seconds = timer;
        } else {
            seconds = timer %60;
        }
        stopwatch.innerHTML = `${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}:${makeTwoDigits(seconds)}`
    }, 1000);
});


stopElement.addEventListener('click', () => {
    console.log("time stopped...");
    clearInterval(interalTimer);
    stopwatch.innerHTML = `00:00:00`;
    timer = 0;
});

resetElement.addEventListener('click', () => {
    console.log("time resetted...");
    clearInterval(interalTimer);
    stopwatch.innerHTML = `00:00:00`;
    timer = 0;

});