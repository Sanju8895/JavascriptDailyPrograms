const promises = new Promise((resolve, reject)=>{
    let error= false;
    setTimeout(() => {
        if(!error){
            resolve({name:"Sanjaya", id:123});
        }else{
            reject("ERROR: something went worng");
        }
    }, 1000);
});

promises.then((data)=>{
    return data.name;
}).then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
});

async function promiseConsumed(){
    try {
      let responce = await promises;
      console.log(responce);
  } catch (error) {
    console.log(error);
  }
}

promiseConsumed();