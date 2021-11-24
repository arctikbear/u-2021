"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const firstQuestionAboutMovie = prompt('Один из последних просмотренных фильмов?', '');
const firstQuestionAboutRaiting = prompt('На сколько оцените его?', '');
const secondQuestionAboutMovie = prompt('Один из последних просмотренных фильмов?', '');
const secondQuestionAboutRaiting = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestionAboutMovie] = firstQuestionAboutRaiting;
personalMovieDB.movies[secondQuestionAboutMovie] = secondQuestionAboutRaiting;

console.log(personalMovieDB);

