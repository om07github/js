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