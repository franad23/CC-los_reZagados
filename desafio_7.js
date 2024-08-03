const palabras = ["casa", "perro", "gato", "elefante", "pez"];
const n = 4;


function juegoDePalabras (arr,n){
  let resultado = arr.filter((palabra) => {
    return palabra.length === n
    }
  );
  return resultado

};

console.log(juegoDePalabras(palabras,n))