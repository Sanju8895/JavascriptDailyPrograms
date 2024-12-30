let str = "sanjaya kumar nayak";

let hashTagName = (str) => {
   let word = str.split(" ").map((ele)=>{
      return ele[0].toUpperCase()+ele.slice(1) ;
   });
   console.log(`#${word.join("")}`);

}
hashTagName(str);