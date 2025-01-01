// "ForEach" mostly use ofr array operations


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //not use function name
//     console.log(val);
// } )

// coding.forEach( (item) => { //arrow function
//     console.log(item);
// } )


//Also use directly this function without any reference

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //function reference

// coding.forEach( (item, index, arr)=> {
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