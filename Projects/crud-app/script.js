
let names=[]



function add(){
    let input= document.getElementById("inputData").value;
    names.push(input.value);
    console.log(input);
    console.log();

};
function edit(){};
function deleteData(e){
    e.parentElement.parentElement.remove();
};
function update(){};