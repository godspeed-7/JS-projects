const ball = document.querySelector('.ball');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const center = document.querySelector('.center');


left.addEventListener('click', () => {
    ball.style.transform = `translate(-200px, 0px)`;
});

right.addEventListener('click', () => {
    ball.style.transform = `translate(200px, 0px)`;
})

up.addEventListener('click', () => {
    ball.style.transform = `translate(0px, -200px)`;
})

down.addEventListener('click', () => {
    ball.style.transform = `translate(0px, 200px)`;
});

center.addEventListener('click', () => {
    ball.style.transform = `translate(0px, 0px)`;
})