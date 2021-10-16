"use strict";

let num = 50;

while (num <= 100) {
    console.log(num);
    num++;
}

let numTwo = 25;

do {

    console.log(numTwo);
    numTwo++;
    
} while (numTwo <= 100);

let numThree = 30;

for (let i = 1; i < 50; i++) {

    if (i === 30) {
        continue;
    }

    console.log(i);
    numThree++;
}