/* # Primitive */ 
//Call by value(Creates a copy to use)

// 8 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/* type of datatype*/
// null => object
 
//ex of symbol
const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id == anotherId) //both are not same

/* #Reference (Non Primitive) */
//Call by reference(dont create a copy changes made in number only)

// Array => object, Objects => object, Functions => function 
const heroes =  ["Shaktiman, :doga"]
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof heroes);

//JavaScript is a dynamically typed language.
/**\
  Dynamic typing means you don’t have to declare variable types explicitly.
  The type is determined at runtime, not during compilation.
  You can assign different types of values to the same variable during execution.
  In contrast, a statically typed language (like Java or C++) would not allow changing types like that without explicit casting or declaration.
 */

/************************************************************/


// Stack(primitive), Heap(Non - primitive)

// stack => Creates a copy and changes occur in that
// Heap => Create changes in an original value 

let username = "Om"

let intermediate = username
intermediate = "Yash"

//value get change for intermediate only username value reamin same
console.log(intermediate)
console.log(username)

//Heap example using object
let userOne = {
    email: "om@gamil.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "yash@gamil.com"

//Both gives the same value
console.log(userOne);
console.log(userTwo);
