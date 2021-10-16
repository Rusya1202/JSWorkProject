"use strict";

const num = 50;

if (num < 50) {
    console.log('Больше!');
} else if (num > 99) {
    console.log('Много!');
} else {
    console.log ('Пойдёт)');
}

const numTwo = 50;

(numTwo === 50) ? console.log ('Пойдёт)') : console.log ('Неееее)');

const numThree = 49;

switch (numThree) {
    case 40 :
        console.log('Добавь ещё 10');
        break;

    case 60 :
        console.log('Убавь 10 и всё будет ок');
        break;

    case 51 :
        console.log('Почтиииииии');
        break;

    case 49 :
        console.log('Почтиииииии');
        break;

    case 50 : 
        console.log('Ай маладэс!');
        break;
    
    default :
        console.log('Чёт ты не то написал :/');
        break;
}