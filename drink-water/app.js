const megaContainer = document.querySelector('.jug');
const filled = document.querySelector('.filled');
let percent = document.querySelector('.percent');


const incrementer = 40;
const totValue = 320;
let calculatedHeight = 0;
function updateMegaContainer(e) { 
  calculatedHeight += incrementer;
  filled.style.height = `${calculatedHeight}px`;
  filled.style.width = '150px';
  filled.style.backgroundColor = '#0670bb';
  percent.textContent = `${calculatedHeight/totValue * 100}%`;
  e.target.setAttribute('data-isfilled', 'true');
}
const glasses = document.querySelectorAll('.glass');
glasses.forEach((glass) => {
  glass.addEventListener('click', (e) => {
    e.target.style.backgroundColor = '#0670bb';
    e.target.style.color = 'white';
    console.log(typeof e.target.dataset.isfilled);
    if (!Boolean(e.target.dataset.isfilled)) {
      updateMegaContainer(e);
    }
  });
});
