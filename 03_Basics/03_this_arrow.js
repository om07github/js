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

// if we use this in browser it gives ouput as a windows cause it is in outer scopoe global object is windows in browser
console.log(this) // output `{}` gives in node env cause in global there is no context 

function chai(){
    let userName = "Om";
    console.log(this.userName);
}

chai();// gives ouput undefined cause "this" cant be use in function only inside object




/*** Arrow Function***/
const addTwo = (num1, num2) => {
    return num1+num2
}

// if there  is only 1 line inside a function
// const addTwo = (num1,num2) => num1 + num2;// implicit return 
// const addTwo = (num1,num2) => (num1 + num2); // CAn be use like this

// const addTwo = (num1, num2) => ({username: "hitesh"}) // object can be ue like this only



