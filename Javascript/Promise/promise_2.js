// Practical Promise Examples
let baseUrl = "https://jsonplaceholder.typicode.com/users"

// With promise then method
    // fetch(baseUrl).then((responce)=>{
    //     let data = responce.json();
    //     return data;
    // }).then((data)=>{
    //     console.log(data);
    // }).catch((err)=>{
    //     console.log(err);
    // }).finally(()=>{
    //     console.log("responce either resolved or rejected")
    // })

//With async await method

async function getAllUser(){
    try{
        let responce = await fetch(baseUrl);
        let data = await responce.json()
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
getAllUser();