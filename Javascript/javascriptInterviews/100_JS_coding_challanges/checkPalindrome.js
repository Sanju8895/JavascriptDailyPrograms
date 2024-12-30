let str = "racecar";

const checkPalindrome = (str)=>{
    let word = str.split("").reverse().join("");

    return str ===word ? true : false;
}

console.log(checkPalindrome(str));