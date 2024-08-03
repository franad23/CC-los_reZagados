const palabras = ["casa", "perro", "gato", "elefante", "pez"];
const n = '4';


function juegoDePalabras (arr,n){

  if(!(arr instanceof Array)) return console.log('El valor ingresado no es un array');
  if(arr.length === 0) return console.log('El array esta vacio');
  
  for (let i of arr){
    if (typeof i !== 'string') return console.log(`El valor ${i} no es un string`);
  }
  if(!n) return console.log('No se ingreso un numero');
  if(typeof n !== 'number') return console.log('El valor ingresado no es un número');
  if(n <= 0) return console.log('El número debe ser mayor a 0');



  let resultado = arr.filter((palabra) => {
    return palabra.length === n
    }
  );
  return resultado

};

console.log(juegoDePalabras(palabras,n))