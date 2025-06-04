// sometimes we work on backend and we dont know the value sent by frontend its datatype etc , so we use // "TYPE"

let score = 33;

let valaueInNumber = Number(score) // we write number(Capital) for conversion
console.log(typeof valaueInNumber )
console.log(valaueInNumber )

// "33" => 33
// "33abc" => NaN(not a number)
// true => 1; false=>0

let isLoggedIn = "Om"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);


// 1=> true;  0 => false
//"" =>false
//"Om" => true


/***********************************************/
let value = 3
let negValue = -value
console.log(negValue) //-3

// console.log(2+2)
// console.log(2*2)
// console.log(2**2) //Creates a power
// console.log(2/2) 
// console.log(2%2) //remainder

let str1 = "hello"
let str2 = " Om"

let str3 = str1 + str2
console.log(str3)


//Gives output according to first preference
console.log("1" + 2) //12
console.log(1 + "2") // 12
console.log(1 + 2 + "3") //output=> 32
console.log("1" + 2 + 3) // output => 123

let gameCounter = 100
gameCounter++; //postincrement
++gameCounter; //preincrement
console.log(gameCounter);
