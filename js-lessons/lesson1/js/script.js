"use strict"; 

let obj = {
    a: 12,
    b: 15,
    c: {
        d: 500,
        e: 240
    }
};

function copy(someObj) {
    let objCopy = {};

    let key;
    for (key in someObj) {
        objCopy[key] = someObj[key];
    };

    return objCopy;
};

console.log(obj);

//let objClone = copy(obj);

//objClone.a = 256;

//console.log(objClone);

//let clone = Object.assign({}, obj);

//clone.a = 525;

//console.log(clone);









let array = ['a', 'b', 'c'];

console.log(array);

//let newArray = array.slice();

//newArray[2] = 0;

//console.log(newArray);

let arrayClone = [...array];

arrayClone[2] = 0;

console.log(arrayClone);









function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

const num = [1, 3, 5];

log(...num);



