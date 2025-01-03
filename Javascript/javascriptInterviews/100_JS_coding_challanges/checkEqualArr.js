let arr = [1,2,3,4];
let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4,5];
let arr3 = [];
let arr4 = [];

let checkEqualArr = (input1, input2)=>{
    if(input1.length !== input2.length){
        return false;
    }
    return input1.every((currVal, index)=> currVal === input2[index]);
}

console.log(checkEqualArr(arr,arr1));