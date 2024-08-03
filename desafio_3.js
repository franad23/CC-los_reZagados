const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function cifradoCesar  (texto, dezplazamiento){
    let textoCifrado = ""; 
    const textoArray = texto.toLowerCase().split(""); 
    textoArray.forEach(letra =>{
        let index = letras.indexOf(letra); 
        if(index != -1 ){
            let nuevoIndex = letras.indexOf(letra) + dezplazamiento; 
            if(letras[nuevoIndex]){
                textoCifrado +=letras[nuevoIndex] 
            }else{
                let nuevoIndex = (letras.length-1) - letras.indexOf(letra); 
                textoCifrado +=letras[nuevoIndex] 
            }
        }
        if(letra === " ") return textoCifrado +=letra; 
    })
    return textoCifrado 
}
console.log(cifradoCesar("hola mundo", 3))