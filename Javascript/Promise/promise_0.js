// Basic Syntax of Promise
new Promise(function(resolve, reject){
    resolve();
    reject();
}).then().catch().finally();

// Example 1

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 1 omplete");
    },1000)
});

promiseOne.then(function(){
    console.log("Promise one cosumed");
});

// Example 2

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 complete");
        resolve();
    },1000)
})

promiseTwo.then(function(){
    console.log("Promise two consumed");
});

// Example 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 3 complete");
        resolve({username:"sanjaya", password:"123"});
    }, 1000);
})

promiseThree.then(function(user){
    console.log("Promise three consumed");
    console.log(user);
})


// Example 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 4 complete");
        resolve({username:"Admin", password:"123"});
    },1000);
});

promiseFour.then(function(user){
    console.log("Promise 4 consumed");
    // console.log(user.username);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
});

// Example 5
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Sanjaya",password:"123"})
        }else{
            reject("ERROR: Something went worng")
        }
    },1000)
});

promiseFive.then((user)=>{
    console.log(user);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise five either resolved or rejected")
})

// Example 6 with async and await;
const promiseSix = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let err = false;
        if(!err){
            resolve({username:"Javascript",password:"123"});
        }else{
            reject("ERROR: JS went worng");
        }
    },1000)
});

async function consumePromiseSix(){
    try {
        let responce = await promiseSix;
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseSix()
