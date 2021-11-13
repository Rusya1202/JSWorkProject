"use strict";

// ==============================================================================================
//Получение элементов
// ==============================================================================================

// const firstBox = document.getElementById('nav-link');
// console.log(firstBox);
// Возвращает элемент с данным id


// const secondBox = document.getElementsByTagName('body');
// console.log(secondBox);
// Возвращает "HTML-Коллекцию"(псевдо-массив) с элементами в данных тегах


// const thirdBox = document.getElementByClassName('header');
// console.log(thirdBox);
// Возвращает "HTML-Коллекцию"(псевдо-массив) с элементами с данным классом


// ==============================================================================================

// const fourthBox = document.querySelectorAll('.header');
// console.log(fourthBox);
// Возвращает "HTML-Коллекцию"(псевдо-массив с методом "forEach") с элементами с данным селектором (CSS) 
// .header.forEach(item => {
//     console.log(item)
// });


// const fifthBox = document.querySelector('#header');
// console.log(fifthBox);
// Возвращает элемент с данным селектором (CSS)

// ==============================================================================================
//Действия с элементами
// ==============================================================================================

const   firstBox = document.getElementById('nav-link'),
        secondBox = document.getElementsByTagName('body'),
        thirdBox = document.getElementByClassName('header'),
        superBox = document.querySelector('.container'),
        fourthBox = container.querySelectorAll('.header'),
        fifthBox = container.querySelector('.header');


// firstBox.style.backgroundColor = 'blue';
// firstBox.style.width = '50px';
//ИЛИ
// firstBox.style.cssText = `background-color: #fff; width: 500px; height: auto;`;
// secondBox[0].style.width = '500px';



// for (let i = 0; i < fourthBox.lenght; i++) {
//     fourthBox[i].style.backgroundColor = 'black';
// }

// fourthBox.forEach( item => {
//     item.style.backgroundColor = 'black';
// });

// ==============================================================================================

const div = document.createElement('div');
const text = document.createTextNode('Hello World!');

div.classList.add('container');

// fourthBox.append(div);
// fourthBox.appendChild(div); -- Старый метод

// fourthBox.pretend(div);

// fourthBox[1].before(div);
// fourthBox[1].after(div);
// container.incertBefore(div, fourthBox[1]); -- Старый метод

// fourthBox[0].remove();
// container.removeChild(fourthBox[0]); -- Старый метод

// fourthBox[0].replaceWith(secondBox[1]);
// container.replaceChild(fourthBox[0], secondBox[1]); -- Старый метод


// div.innerHTML = '<h1>Hello world!</h1>';
// div.textContent = '<h1>Hello world!</h1>';

// div.insertAdjacentHTML('beforebegin/afterbegin/beforeend/afterend', '<h1>Hello world!</h1>'); 







