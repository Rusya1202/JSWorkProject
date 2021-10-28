"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
    
            let a = prompt('Один из последних просмотренных фильмов?'),
                b = prompt('На сколько оцените его?');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                console.log('ok');
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                i--;
            }
        
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы - киноман');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {

        //for (let i = 1; i <= 3; i++) {
        for (let i = 1; i < 2; i++) {
    
            //let a = prompt(`Ваш любимый жанр под номером ${i}`);
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            //if (a != null && a != '') {
            //    personalMovieDB.genres[i - 1] = a;
            //} else {
            //    console.log('Вы ввели некорректные данные или не ввели их вообще');
            //    i--;
            //}

            if (genres != null && genres != '') {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } else {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            }

            //условие я сделал не так как в уроке, если у тебя возникли проблемы с этим... сорян :Р
            //нормальное условие в уроке 24 --->>
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимы жанр номер ${i + 1} - это ${item}`);
        });
    }

};

//personalMovieDB.start();

//personalMovieDB.rememberMyFilms();

//personalMovieDB.detectPersonalLevel();

//personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();
