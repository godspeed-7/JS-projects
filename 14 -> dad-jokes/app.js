const jokeElement = document.querySelector('#joke');
let options = {
    headers: {
        "Accept": "application/json"
    }
}
async function getRandomJoke() {
const jokeP = await fetch('https://icanhazdadjoke.com', options);
const {joke} = await jokeP.json();
jokeElement.textContent = joke;
}

getRandomJoke();