let n = 5;
function findFactorial(input){
    let fact = 1;
   for(let i=1; i <= input; i++){
      fact *= i
   }
   return fact;
   
}

console.log(findFactorial(n));