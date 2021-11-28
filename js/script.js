"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function() {
        let movieName,
            raiting;
        for (let i = 1; i <= 2; i++) {
            do {
                movieName = prompt('Один из последних просмотренных фильмов?', '');
            } while (movieName == '' || movieName == null || movieName.length > 50);
            do {
                raiting = prompt('На сколько оцените его?', '');        
            } while (raiting == '' || raiting == null || raiting > 10 || isNaN(raiting));
            
            personalMovieDB.movies[movieName] = raiting;
        }    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(dB) {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`).toLowerCase();
            while (genre === '' || genre === null) {
                genre = prompt(`Ваш любимый жанр под номером ${i}?`).toLowerCase();
            }
            personalMovieDB.genres[i-1] = genre;
        }
        personalMovieDB.genres.forEach((genre, key) => {
            console.log(`Любимый жанр ${key+1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB : function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};

personalMovieDB.writeYourGenres(personalMovieDB);
