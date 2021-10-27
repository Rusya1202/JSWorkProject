"use strict"; 

const human = {
    height: 170,
    weight: 65,
    sayHello: function () {
        console.log('Hello');
    },
    health: 100
};

const marry = Object.create(human);

//console.log(marry.health);

marry.sayHello();



