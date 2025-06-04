// we can declare string in single quote('') or double quote ("")

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");// bad practise instead use bapticks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// By using bapticks we can do string interpolation(a process of determining the unknown values that lie in between the known data points)

const gameName = new String('hitesh-hc-com')// another way to decalre string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
// Browser dont understand spaces they convert that spaces into url encoded code like "hitesh choudhary" is changed into "hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));