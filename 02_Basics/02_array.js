const hero1 = ["thor", "Ironman", "spiderman"]
const hero2 = ["superman", "flash", "batman"]

//hero1.push(hero2) // takes hero2 as a data and add in array form 
//["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]


//Concat use to add 2 array only and store it in new variable
const allHeros = hero1.concat(hero2)
console.log(allHeros);

//another method to add arrays (Here we can add more than 2 array at a time)
const heros = [...hero1, ...hero2]// spread operator
console.log(heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//"flat" converts array to simple array without any brackets in between
console.log(real_another_array); 



console.log(Array.isArray("Om")) //checks if array or not
console.log(Array.from("Om"))// to convert into array
console.log(Array.from({name: "hitesh"})) // interesting(cause we have not specified that to make an array form keys or value)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// returns array with set of elements.


