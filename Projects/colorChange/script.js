const buttons= document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);

buttons.forEach((ele) => {
    ele.addEventListener("click", (e)=>{
        body.style.backgroundColor=  e.target.id;
    })
})
