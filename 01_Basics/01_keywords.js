// Hoisting is JavaScript's default behavior of moving declarations (variables, functions, and classes) to the top of their scope (script or function) during the compilation phase.
// Only declarations are hoisted, not initializations or assignments.


// 1. var Variables
// var declarations are hoisted to the top of their function or global scope and initialized with undefined.
/**
  1. Function Scope Only (Not Block Scoped)
  2. Can Be Re-declared
  3. Hoisting Confusion
  4. No Temporal Dead Zone (TDZ) Protection
 */

// 2. let and const Variables (Block-scoped)
// Both let and const are hoisted, but they are placed in a temporal dead zone (TDZ) from the start of the block until the declaration is encountered. Accessing them before declaration results in a ReferenceError.
/**✅ Why let and const are better:
Block-scoped
No accidental re-declaration
TDZ prevents early use
More predictable and safer code
*/


// Hoisting with Functions
// 1. Function Declarations
// Function declarations are hoisted entirely, meaning you can call the function before it is defined in the code.
// 2. Function Expressions
// Function expressions are not hoisted like declarations because they are assigned to variables.
// If the variable is declared with var, it is hoisted and initialized with undefined, resulting in a TypeError when the function is called.

//let const and var keywords

const accountId = 1345
let accountEmail = "om@gmail.com"
var accountPassword = "12345"
let accountState; // value will be undefined 


accountCity = "Delhi" // dont use these method

// accountId = 2 // not allowed const variable cant get changed

console.log(accountId)

console.table([accountEmail,accountId,accountPassword, accountState,accountCity]) //create a tabular output in terminal 

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

