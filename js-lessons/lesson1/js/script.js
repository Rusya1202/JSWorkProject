"use strict";

let num = 50;

    console.log(num);
while (num <= 100) {
    num++;
}

let numTwo = 25;

do {

    console.log(numTwo);
} while (numTwo <= 100);
    
    numTwo++;

let numThree = 30;

for (let i = 1; i < 50; i++) {
    if (i === 30) {

        continue;
    }

    console.log(i);
    numThree++;
}