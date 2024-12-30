let arr = [1,2,3,5,4,9,8];

const findFaxNum = (arr)=>{
    let maxNum = arr.sort((a,b)=>{return b-a})[0];
    return maxNum;
};

console.log(findFaxNum(arr));
