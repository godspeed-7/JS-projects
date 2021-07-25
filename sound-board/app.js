const container = document.querySelector('.container');

function creataAllAudios() {
  let applause = new Audio('./assets/1.mp3');
  let boo = new Audio('./assets/2.mp3');
  let gasp = new Audio('./assets/3.mp3');
  let tcu = new Audio('./assets/4.mp3');
  let victory = new Audio('./assets/5.mp3');
  return [applause, boo, gasp, tcu, victory];
}
let audios = creataAllAudios();
const soundButton = container.addEventListener('click', (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case 'applause':
      audios.map((e) => e.pause());
      audios[0].play();
      break;
    case 'boo':
      audios.map((e) => e.pause());
      audios[1].play();
      break;
    case 'gasp':
      audios.map((e) => e.pause());
      audios[2].play();
      break;
    case 'tcu':
      audios.map((e) => e.pause());
      audios[3].play();
      break;
    case 'victory':
      audios.map((e) => e.pause());
      audios[4].play();
      break;
    case 'victory':
      audios.map((e) => e.pause());
      audios[5].play();
      break;
    default:
      break;
  }
});
