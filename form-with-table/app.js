import Movie from './movie.js';
import {setItemInLocalStorage, getItemFromLocalStorage} from '../utils/localstorage.js';

//get form
const formElement = document.querySelector('.parent-form');

const movies = [];

function getInitialMovies() {
   const movies = JSON.parse(getItemFromLocalStorage('movies'));
   console.log("intial movies", movies);
}
getInitialMovies();
function validateMovie(movie) {
  let errors = {};
  if (!movie.title) errors.title = 'Movie Name is Required';
  if (!movie.genre) errors.genre = 'genre is Required';
  if (!movie.numberInStock)
    errors.numberInStock = 'Number in Stock is Required';
  if (!movie.dailyRentalRate)
    errors.dailyRentalRate = 'Daily rental rate is Required';
  if (!movie.rating) errors.rating = 'Rating is Required';
  return errors;
}
function createMovie(target) {
  const [, title, genre, numberInStock, dailyRentalRate, rating] = Array.from(
    target
  ).map((t) => t.value);
  const movie = new Movie(title, genre, numberInStock, dailyRentalRate, rating);
  const errors = validateMovie(movie);
  if(Object.keys(errors).length >0) {
      return alert('Please fill all the values');
  }
  movies.push(movie);
  setItemInLocalStorage('movies',JSON.stringify(movies));
  console.log('movie', movie);
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target } = e;
  createMovie(target);
});
