const nestedArray = [1, [2, [3, [4, 5]]]];
function flattenArr(input){
    let result = [];
    input.forEach((ele)=>{
        if(Array.isArray(ele)){
            result = result.concat(flattenArr(ele));
        }else{
            result.push(ele);
        }
    })
    return result;
}

console.log(flattenArr(nestedArray));

// Example 2

let result= nestedArray.flat(Infinity);
console.log(result);

