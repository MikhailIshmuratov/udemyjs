'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {

    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt(`Один из последних просмотренных фильмов?`, ``),
          b = prompt(`На сколько оцените его?`, ``);
    if (a != null && b != null && a != `` && b != `` && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log(`aaa`);
    } else {
        i--;
        console.log(`bbb`);
    }
    
}

if (personalMovieDB.count > 50) {
    alert(`Вы киноман`);
} else if (personalMovieDB.count < 10) {
    alert(`Вы обсос`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert(`Вы норм чувак`);
} else {
    alert(`error`);
}

console.log(personalMovieDB);

