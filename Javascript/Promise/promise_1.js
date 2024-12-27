const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 Resolve")
});


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 3 is complete");
        resolve({username:"Sanjaya", email:"sanjayanayak67@gmail.com"});
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
    console.log("promise three consumed");
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 4 complete");
        let error = false;
        if(!error){
            resolve({username:"Sanjaya", password:"123"});
        }else{
            reject("ERORR: Somthing went worng...!");
        }
    },1000)
})

promiseFour.then(function(user){
   console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Primse four either resolved or rejected");
});


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", password:"123"});
        }else{
            reject("ERROR: JS went worng")
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        let responce = await promiseFive;
        console.log(responce)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// async function getAllUser(){
//     try{
//         let responce = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = await responce.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getAllUser();


fetch("https://jsonplaceholder.typicode.com/users")
.then((responce)=>{
    return responce.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log(" responce either fatched or rejected");
})