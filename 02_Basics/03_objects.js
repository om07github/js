// singleton
// Object.create
// Constructor objects: By default, each call creates a new instance unless you enforce a singleton pattern explicitly.
// Literal objects: Are inherently singleton as long as the same literal is reused. Redefining creates separate instances.



// object literals

const mySym = Symbol(key1);
const JsUser = {
    name: "Om", //javascript treat name as a string only "name"
    age: 18,
   [ mySym] : "myKey1",//declare with [] cause it value get changed to string
    "fullname" : "Om Mahalle" //Sometimes we can declare like this
}

//for output

console.log(JsUser.name);
console.log(JsUser["name"]);// write as a string cause it is treated as string
console.log(JsUser["fullname"]);//we can access it using "." operator


Object.freeze(JsUser) //use to freeze object now no changes can be done

JsUser.greeting = function(){
    console.log("Hello JS user"); 
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); //gives output "function "
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
