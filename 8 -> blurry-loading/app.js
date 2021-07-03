const parent = document.querySelector('.parent');
const myText = document.querySelector('.loader');
let timer;
let timerInner;
let count = 10;
let textCount = 100;
timer = setInterval(async () => {
  let temp = 0;
  if (count == 0) clearInterval(timer);
  parent.style.filter = `blur(${count}px)`;
  count--;
}, 400);

timerInner = setInterval(() => {
  console.log(textCount);
  myText.textContent = `${textCount}%`;
  if (textCount == 0) clearInterval(timerInner);
  textCount--;
}, 40);
