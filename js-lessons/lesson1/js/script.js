"use strict";

// console.log(document.head); 
// --Получаем тэг head в док-те


// console.log(document.documentElement); 
// --Получаем текст всего HTML док-та




// console.log(document.body.childNodes); 
// --Получаем дочерние узлы объекта (с текстовыми узлами)


// for (let node of document.body.childNodes) {
//     if (node.nodeName === '#text') {
//         continue;
//     }

//     console.log(node);
// }
// --Получаем дочерние узлы объекта (без текстовых узлов)




// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// --Получаем первый/последний узел

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// --Получаем первый/последний элемент




// console.log(document.querySelector('#data').parentNode);
// console.log(document.querySelector('#data').parentElement);
// --Получаем узел/элемент родитель указанного элемента по дата-атребуту

// console.log(document.querySelector('data-name="number"').nextElementSibling);
// --Получаем следующий родственный элемент 