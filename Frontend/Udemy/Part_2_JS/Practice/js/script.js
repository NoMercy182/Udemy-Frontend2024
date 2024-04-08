/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
const ratingOfTheFilm = prompt('На сколько оцените его?');

const lastWatchFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const ratingOfTheFilm2 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastWatchFilm] = ratingOfTheFilm;
personalMovieDB.movies[lastWatchFilm2] = ratingOfTheFilm2;

console.log(personalMovieDB);