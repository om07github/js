// singleton(Singleton means creating only one single object that is reused everywhere in the program.)
// Object.create

// Constructor objects: By default, each call creates a new instance unless you enforce a singleton pattern explicitly.
/**Used when you want to create many objects with the same structure.
new keyword creates a new object using the constructor. */


// Literal objects: Are inherently singleton as long as the same literal is reused. Redefining creates separate instances.
/*
Used when you just want a simple object.
No need for functions or blueprints.
 */


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
console.log(JsUser["fullname"]);//we cant access it using "." operator


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
