//Declared using constructor
const userName = new Object() 

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


//to add two objects
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

//when the data comes from database it comes in the form of arrays 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

 console.log(Object.keys(tinderUser));//return key in array datatype
 console.log(Object.values(tinderUser));//return value in array datatype
 console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// check present or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor




//Destructuring of Object
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);




/* How Json object is created here key is defines as strings */

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//Sometimes JSON are defined as array 
[
    {},
    {},
    {}
]