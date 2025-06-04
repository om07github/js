/*
Date objects encapsulate an integral number that represents milliseconds 
since the midnight at the beginning of January 1, 1970
*/

// let myDate = new Date() // here date object is created or an instance 
// console.log(typeof myDate); //object
// console.log(myDate); //2024-12-29T04:10:02.983Z
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());


let myCreateDate = new Date("2023-01-14")//to create own date
console.log(myCreateDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);//ans in milleseconds


//to convert into seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//starts form 0
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday:"long"
})
//use ctrl+space to get properties of objecgtg in vs code 