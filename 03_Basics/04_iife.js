/*** Immediately Invoked Function Expression (IFFE) ***/

//when we want to immediatey called a function or execute for ex:- when we want to exewcute any database function

//Declaration

(function addTwo() {
    console.log(`DB connected`);
})();

//we have to apply ";" before writing any other function
//to context to exit of upper function we have to end it here 

(()=>{
    console.log(`DB connected`);
});


((name)=>{
    console.log(`DB connected ${name}`);
})('Om');
