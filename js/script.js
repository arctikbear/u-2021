"use strict";

let numberOfFilms;
/*
function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();
*/
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

/*const dbLength = 2;


let movieName;
let raiting;

function rememberMyFilms() {
    for (let i = 1; i <= dbLength; i++) {
        do {
            movieName = prompt('Один из последних просмотренных фильмов?', '');
        } while (movieName == '' || movieName == null || movieName.length > 50);
        do {
            raiting = prompt('На сколько оцените его?', '');        
        } while (raiting == '' || raiting == null || raiting > 10 || isNaN(raiting));
        
        personalMovieDB.movies[movieName] = raiting;
    }    
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }    
}

detectPersonalLevel();

console.log(personalMovieDB);
*/
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(dB) {
    let genres = [];
    for (let i = 1; i <= 3; i++) {
        dB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
    return genres;
}
console.log(writeYourGenres(personalMovieDB));

showMyDB();
