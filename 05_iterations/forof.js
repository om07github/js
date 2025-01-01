// for of
//can apply this on array
// not on object or map

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")

console.log(map);// Map(2) { 'In' => 'India', 'USA' => 'United States of America' }


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