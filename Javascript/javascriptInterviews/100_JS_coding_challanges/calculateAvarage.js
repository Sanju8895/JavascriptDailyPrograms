let arr= [20,30,40,50];
let arr1 = [1,2,3,4];

let calculateAvarage = (input)=>{
   let result = input.reduce((accum, curr)=> {return accum + curr})/ input.length;
   return result;
}

let calculateAvarage1 = (input)=>{
    let sum =0;
   for(let i=0; i< input.length; i++){
     sum = sum + input[i];
   };
  return sum;
}

// console.log(calculateAvarage(arr));
// console.log(calculateAvarage(arr1));
// console.log(calculateAvarage1(arr1));
console.log(calculateAvarage1(arr));

