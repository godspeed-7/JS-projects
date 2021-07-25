
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const circleContainer = document.querySelector('.circle-container');
const parent  = document.querySelector('.parent');
const navigation = document.querySelector('.navigation');

open.addEventListener('click', ()=> {
circleContainer.style.transform = 'rotate(0.5turn)';
parent.classList.toggle('show-nav');
navigation.style.left = '0px';

});

close.addEventListener('click', ()=> {
circleContainer.style.transform = 'rotate(0turn)';
parent.classList.toggle('show-nav');
navigation.style.left = '-100px';
})