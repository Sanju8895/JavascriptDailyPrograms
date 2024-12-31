const deepClone =(input)=>{
  return JSON.parse(JSON.stringify(input));
};

let obj= {a:10, b:{ c:30}};

deepClone(obj);
console.log(deepClone(obj))