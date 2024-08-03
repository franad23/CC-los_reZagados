function divisores (a){
    let suma = 0; 
    for (let index = 0; index < a; index++) {
        if(a % index  === 0 ){
            suma+=index; 
        }
    }
    return suma; 
}
function sonAmigable(num1, num2){
    const resultado_1 = divisores(num1); 
    const resultado_2 = divisores(num2); 
    return num1 === resultado_2 && num2 === resultado_1; 
}


console.log(sonAmigable(220,284));

