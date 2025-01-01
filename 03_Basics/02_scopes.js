/*******  SCOPES     *******/

//Two type of scopes 
//1. Global Scope 2. Block Scope 
// initialized in global scope can be used anywhere in the code but object created in block scope can be used within a block scope only.

var c = 3 // Don't use its block and global scope is not verified


let a = 20
const b = 2

/**There is diff between scopes in browser and codse environments like vscode**/



// ++++++++++++++++++ interesting ++++++++++++++++++


/*** Hoisting:- means you can use variables and functions before they are declared. ***/
//Function declarations are fully hoisted, so you can call them before declaring.
//Function expressions and arrow functions are not hoisted.

console.log(addone(5)) // these gives output as 6

function addone(num){
    return num + 1
}



addTwo(5) // this doesn't gives output , it gives error
const addTwo = function(num){
    return num + 2
}