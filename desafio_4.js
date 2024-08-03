const validacionDeParentesis = (cadena) => {

  let pila = []
  for(let i = 0; i < cadena.length; i++){
      if(cadena[i] === '('){
          pila.push(cadena[i])
      }else if(cadena[i] === ')'){
          if(pila.length === 0){
              return false
          }else{
              pila.pop()
          }
      }
  }
  if(pila.length === 0){
      return true
  }else{
      return false
  }
}

console.log(validacionDeParentesis('(((())))))))'))