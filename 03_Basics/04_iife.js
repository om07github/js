/*** Immediately Invoked Function Expression (IFFE) ***/

//when we want to immediatey called a function or execute for ex:- when we want to execute any database function
//global scope ke polution se problem hoti hai, to us global scope ke pollution ko hatane ke liye iffe k use kiya
//Declaration

(function addTwo() {//named iffe
    console.log(`DB connected`);
})();

//we have to apply ";" before writing any other function
//to context to exit of upper function we have to end it here 

(()=>{//not named iffe
    console.log(`DB connected`);
});


((name)=>{
    console.log(`DB connected ${name}`);
})('Om');
