let arr = [1,2,3,2,4,2,5,6,7,4,5];

let deplicates = arr.filter((ele, ind)=>{
    return arr.indexOf(ele) == ind;
});
console.log(deplicates);