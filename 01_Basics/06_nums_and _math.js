const score = 400
console.log(score);

// Declaration of a string using object
const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString().length)//after converting it to string we can use string methods on it
console.log(balance.toFixed(1)); //gives 1 number as output after decimal


const otherNumber = 23.9403

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


/*********************************************/

console.log(Math); //Math => object, and have many methods
console.log(Math.abs(-4));
console.log(Math.round(4.6)); //give a around value
console.log(Math.ceil(4.2)); //5 give a ceiling value (higher value)
console.log(Math.floor(4.9));//4 give a floor value (shoter value)
console.log(Math.max(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); //givs a random value between 0 and 1
console.log(Math.floor((Math.random()*10) +1))


