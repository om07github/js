// for of
//can apply this on array
// not on object or map
//return vlaues

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}// each char of string hello world get print like Each char is H Each char is e

// Maps

const map = new Map()
map.set('In', "India")
map.set('In', "India")
map.set('USA', "United States of America")

console.log(map);//output come as :-  Map(2) { 'In' => 'India', 'USA' => 'United States of America' }
//ths, in map only unique value get stored

for (const [key, value] of map) {
    //console.log(key, ":-", value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

/****"for of" can't get execute for object ******/
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } 