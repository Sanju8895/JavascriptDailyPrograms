const form= document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#result');
    const bmi= (weight/((height*height)/10000)).toFixed(2);
    
    if(height < 0 || height == '' || isNaN(height)){
        result.innerHTML=  `Please enter a valid height ${height}`
    }else if(weight < 0 || weight == '' || isNaN(weight)){
        result.innerHTML=  `Please enter a valid weight ${weight}`
    }else{
        if(bmi < 18.6){
            result.innerHTML= `You have uder weight ${bmi}`;
        } else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML= `You have Normal weight ${bmi}`;
        }else {
            result.innerHTML= `You have Over weight ${bmi}`;
        }
    }

})