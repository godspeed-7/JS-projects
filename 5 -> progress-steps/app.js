const line = document.querySelector('.line');
const circles = document.querySelectorAll('.circle');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let selectedElement = 1;

function updateLineNext() {
    circles.forEach((circle, index) => {
        if(index < selectedElement) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    const val = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    console.log({val});
    line.style.width = val;
}

next.addEventListener('click', () => {
    if(selectedElement < circles.length) {
        selectedElement++;
    }
    updateLineNext();
  console.log(selectedElement);
});

prev.addEventListener('click', () => {
    if(selectedElement >1) {
        selectedElement--;
    }
    updateLineNext();
  console.log(selectedElement);
});
