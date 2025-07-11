const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
//filter(Boolean) keeps only truthy values

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/********   Nullish Coalescing Operator (??): null, undefined    *********/ 
//when we want to select form data which is coming is it what we want etc.
//?? mostly used using null and undefined operator

let val1;
// val1 = 5 ?? 10 //output 5
// val1 = null ?? 10 //output 10
// val1 = undefined ?? 15 //output 15
val1 = null ?? 10 ?? 20//  //output 10(get first value assigned)

console.log(val1);


/*************Terniary Operator ***********/


// The ternary operator in JavaScript is a shorthand for an if-else


// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")