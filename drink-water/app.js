const megaContainer = document.querySelector('.jug');
const filled = document.querySelector('.filled');
const incrementer = 40;
let calculatedHeight = 0;
function updateMegaContainer(e) {
  calculatedHeight += incrementer;
  filled.style.height = `${calculatedHeight}px`;
  filled.style.width = '150px';
  filled.style.backgroundColor = '#0670bb';
  e.target.setAttribute('data-isfilled', 'true');
}
const glasses = document.querySelectorAll('.glass-container');
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
