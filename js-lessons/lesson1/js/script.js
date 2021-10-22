"use strict"; 


const testObj = {
    name: 'test',
    width: 1200,
    height: 350,
    bgcol: 'back',
    content: {
        title: 'This is test object',
        text: 'Hello world!'
    },
    showKeys: function() {
        console.log(Object.keys(testObj));
        console.log(Object.keys(testObj).length);
    },
    showWordyKeys: function() {
        for (let key in testObj) {
            if (typeof(testObj[key]) === 'object') {
                for (let i in testObj[key]) {
                    console.log(`Свойство ${i} в свойстве ${key} имеет значение ${testObj[key][i]}`);
                }
            } else if (typeof(testObj[key]) === 'function') {
                continue;
            } else {
                console.log(`Свойство ${key} имеет значение ${testObj[key]}`);
            }
        }
    }
};


testObj.showWordyKeys();