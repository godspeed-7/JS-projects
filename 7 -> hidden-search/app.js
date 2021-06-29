const button = document.querySelector('#myButton');
const input = document.querySelector('#myInput');
const search = document.querySelector('.search');
button.addEventListener('click', () => {
// input.style.width = '600px';
input.classList.toggle('additional');
})