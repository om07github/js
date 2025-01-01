/******* Reduce ********/
// it returns curr+accumulator value

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) 

// Here "0" value is to give initial value to accumulator , then later on 
// acc + currval is given to acc.

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce( (acc,curr) => acc + curr.price, 0 )
console.log(pricetopay);
