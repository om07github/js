/*** this :- It refers the current context ***/ 
const user = {
    username: "Om",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username}, welcpome to website`);\
        console.log(this); // Gives all the value in the current context
        
    }
}

user.welcomeMessage();




////

if we use
console.log(this) // output `{}`