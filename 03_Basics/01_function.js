/*
Compilation Time (Before Running)
This is when your code is checked and converted into machine-readable code (0s and 1s).
*/

/*
Runtime (While Running)
This is when your program is actually running.
The code is executed line by line.
*/

function myName(){
    return "love"
}

const result = myName()
console.log(result)

//JavaScript is a dynamically typed language, so it automatically figures out the data type at runtime.
//In JavaScript, you do not specify data types for function arguments.
function addNumber(num1, num2){//parameters included
    console.log(`Addition is ${num1+num2}`)
}

//Parameters and arguments are diff

addNumber() //arguments                                                                                                          
//if we dont write any argument in function call then while accesing that value will give undefined as an answer


//"..." operator called as spread and rest operator
//here it is called as rest operator
//all 3 elements are packed in package and then send
function cartPrice(...num1){
    return num1
}// output array[200,300,400,500,600]
function cartPrice(val1, val2, ...num1){ //here val1 and val2 get 1 element each and rest to num1
    return num1
}

console.log(cartPrice(200, 300, 400, 500, 600));


//learn with objects
const user = {
    userName : "Om",
    price : 499
}

function handleObject(anyObject){
    console.log(`${anyObject.userName} and ${anyObject.price}`);
}

//handleObject(user);
//also can describe it as 
handleObject({
    userName : "Om",
    price : 499
})

/************  Using arrays ******************/
const myNewarray = [200,300,400,500]

function returnValue(getArray){
    getArray[1]
}

//console.log(returnValue(myNewarray))
console.log(returnValue([900,100,200]));

