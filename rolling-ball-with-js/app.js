const ball = document.querySelector('.ball');
// let zero = 0;
// window.onload  = function() {
// ball.style.transform = `translate(${zero}px)`;
// }

//action

const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');


forward.addEventListener('click', () => {
    ball.style.transform = `translate(200px, 0px)`;
});

backward.addEventListener('click', () => {
    ball.style.transform = `translate(0px, 0px)`;
})