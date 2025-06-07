// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const error = true;
//         if(!error){
//             resolve({username: "Om Mahalle", "password": "123"})
//         }else{
//             reject("Some error has been occured")
//         }
//     },1000)
// })

async function consumePromiseOne(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseOne()