"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const dbLength = 2;


let movieName;
let raiting;

for (let i = 1; i <= dbLength; i++) {
    do {
        const movieName = prompt('Один из последних просмотренных фильмов?', '');
    } while (movieName == '' || movieName == null || movieName.length > 50);
    do {
        raiting = prompt('На сколько оцените его?', '');        
    } while (raiting == '' || raiting == null || raiting > 10 || isNaN(raiting));
    
    personalMovieDB.movies[movieName] = raiting;
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
