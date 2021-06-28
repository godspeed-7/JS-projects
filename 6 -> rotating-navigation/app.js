
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const circleContainer = document.querySelector('.circle-container');
const parent  = document.querySelector('.parent');


open.addEventListener('click', ()=> {
circleContainer.style.transform = 'rotate(0.5turn)';
parent.classList.toggle('show-nav');
});

close.addEventListener('click', ()=> {
circleContainer.style.transform = 'rotate(0turn)';
parent.classList.toggle('show-nav');
})