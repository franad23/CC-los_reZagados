
function combinaciones (cadena){
  if(typeof cadena !== 'string') return console.log('El valor ingresado no es una cadena');
  

const cadenaAArray = [];

for (let i = 0; i < cadena.length; i++) {
  cadenaAArray.push(cadena[i]);
}
console.log(cadenaAArray)

  const data = {
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z']
  };

let resultadoParcial = data[cadenaAArray[0]]

for (let i = 1; i < cadenaAArray.length; i++) {
  resultadoParcial = haceCombinaciones(resultadoParcial, data[cadenaAArray[i]])
}
console.log(resultadoParcial)

}

function haceCombinaciones (arr1, arr2){
  
  let resultado = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      resultado.push(arr1[i] + arr2[j]);
    }
  }
  return resultado;
}
console.log(combinaciones('2345'))
