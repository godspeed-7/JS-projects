const containerElem = document.querySelector('.container');

function createElements(badCharactersImages){
for (let i = 0; i < badCharactersImages.length; i++) {
    const element = document.createElement('img');
    const divElement = document.createElement('div');
    const nameElement = document.createElement('div');
    nameElement.textContent = badCharactersImages[i].name; 
    nameElement.className = 'name';
    element.src = badCharactersImages[i].img;
    divElement.className = 'item';
    divElement.appendChild(element);
    divElement.appendChild(nameElement);
    containerElem.appendChild(divElement);
}
}
async function fetchBadCharacters() {
  const badCharacters = await fetch(
    'https://www.breakingbadapi.com/api/characters'
  ).then((data) => data.json());
  let badCharactersImages = badCharacters.map(character => ({img: character.img, name: character.name}));
  createElements(badCharactersImages);
  console.log('badchars', badCharactersImages);
}

fetchBadCharacters();
