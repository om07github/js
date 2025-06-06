// "ForEach"and "map" mostly use for array operations,
// cause when we define array in their protoytpe for each n map is predetermined


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //not use function name cause it is a callback function
//     console.log(val);
// } )

// coding.forEach( (item) => { //arrow function
//     console.log(item);
// } )


//Also use directly this function without any reference

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //function reference given

// coding.forEach( (item, index, arr)=> { // for each contains all this parameters in it
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )