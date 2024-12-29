// let str = "this is the Javascript coding challenges";

// const findLogestWords = (str)=>{
//     if(str.trim() ===0){
//         return false;
//     }
//   let words = str.split(" ");
// //   console.log(words);
//   let sortedWord = words.sort((a,b)=> {return a-b});
//   console.log(sortedWord, "Sorted word");
// }
// findLogestWords(str);

let arr= [ 'this', 'is', 'the', 'Javascript', 'coding', 'challengess' ];
// console.log(arr.sort((a,b)=> {return b.length - a.length})[0]);


let findLongestWord = arr.reduce((accum, currentWord) =>{
    return  currentWord.length > accum.length ? currentWord : accum;
})
console.log(findLongestWord," longest word");
