/*** this :- It refers the current context ***/ 
const user = {
    username: "Om",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username}, welcpome to website`);
        console.log(this); // Gives all the value in the current context
        
    }
}

user.welcomeMessage();




////

// if we use this in browser it gives ouput as a windows cause it is in outer scopoe
console.log(this) // output `{}`


/*** Arrow Function***/
const addTwo = (num1, num2) => {
    return num1+num2
}

// if there  is only 1 line inside a function
// const addTwo = (num1,num2) => num1 + num2;
// const addTwo = (num1,num2) => (num1 + num2); // CAn be use like this

// const addTwo = (num1, num2) => ({username: "hitesh"}) // object can be ue like this only



