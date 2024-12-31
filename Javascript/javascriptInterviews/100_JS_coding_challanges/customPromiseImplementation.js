class MyPromise {
    constructor(executor){
        this.callback = [];
        this.errorHandler = null;
        this.state = 'PENDING';

        const resolve = (value)=>{
            if(this.state === "PENDING"){
                this.state = "RESOLVED";
                this.callback.forEach((cb)=>{
                    cb(value);
                })
            }
        };
        const reject = (error)=>{
            if(this.state === "PENDING"){
                this.state = "REJECTED";
                this.errorHandler && this.errorHandler(error);
            }
        };
        executor(resolve, reject);
    }
    then(callback){
        if(this.state === "RESOLVED"){
            callback();
        }else{
            this.callback.push(callback);
        }
        return this;   
    }
    catch(callback){
        if(this.state === "REJECTED"){
            callback();
        }else{
            this.errorHandler = callback;
        }
        return this;
    }
}


const promiseOne = new MyPromise((resolve, reject)=>{
    let error = false;
    setTimeout(function(){
        if(!error){
            console.log("Async task one");
            resolve()
        }else{
            reject("ERROR: Something went worng");
        }
      
    },1000)
})

promiseOne.then(()=>{
    console.log("promiseOne consumed");
}).catch((error)=>{
    console.log(error)
})
