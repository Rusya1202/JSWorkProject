"use strict"; 

//To string 

//1)
console.log(typeof(String(null)));

//2)
console.log(typeof(null + ''));



//To number

//1)
console.log(typeof(Number('5')));

//2)
console.log(typeof(+'57'));

//3) 
console.log(typeof(parseInt("15px", 10)));



//To boolean
 
//1)
//0, '', null, undefined, NaN === false (отсутствие значений)
//(Есть значение) === true

//2) 
console.log(typeof(Boolean('4')));

//3) 
console.log(typeof(!!"444"));

