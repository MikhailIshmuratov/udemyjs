'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {

    }
}

//start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`Один из последних просмотренных фильмов?`, ``),
              b = prompt(`На сколько оцените его?`, ``);
        if (a != null && b != null && a != `` && b != `` && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log(`done`);
        } else {
            i--;
            console.log(`error`);
        }    
    }    
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count > 50) {
        alert(`Вы киноман`);
    } else if (personalMovieDB.count < 10) {
        alert(`Вы обсос`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert(`Вы норм чувак`);
    } else {
        alert(`error`);
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ``);
    }
}

writeYourGenres();