let num = 1234;

const sumOfDigit = (num)=>{
    let arr = Array.from(String(num),Number); 
    return arr.reduce((acumm, curElem)=> acumm+=curElem, 0)
}
console.log(sumOfDigit(num))