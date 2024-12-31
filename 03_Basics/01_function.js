function myName(){
    return "love"
}

const result = myName()
console.log(result)


function addNumber(num1, num2){//parameters included
    console.log(`Addition is ${num1+num2}`)
}

addNumber() //arguments



//"..." operator called as spread and rest operator
//here it is called as rest operator
//all 3 elements are packed in package and then send
function cartPrice(...num1){
    return num1
}
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
console.log([900,100,200]);

