/* # Primitive */ 
//Call by value(Creates a copy to use)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

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
