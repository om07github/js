
// Array creates a shallow copy
// Shallow copy make changes in original array (reference) 
// deep copy dont make changes in original 

const myArray = [0,1,2,3,4]
console.log(myArray[0]);

const myArray2 = new Array(1,2,3,4) //can be declared like this

//Add and delete element element form last
myArray.push(6);
myArray.pop()

//Add and delete elements form front not much used generally
myArray.unshift(9)
myArray2.shift()

console.log(myArray.includes());
console.log(myArray.indexOf(3));

const newArray = myArray.join() // add elements but convert newArray to string datatype

console.log(myArray);
console.log(typeof newArray); //string type 



//Slice and Splice
//  slice :- gives portion of array as outpout without making changes in 
// original Array
// splic => gives portion of array as output and also change the original array

console.log("A ", myArray);

const myn1 = myArray.slice(1,3);
console.log(myn1);

const myn2 = myArray.splice(1,3);
console.log(myn2);



