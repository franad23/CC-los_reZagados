import { newFunction } from './helpers/function';
import { validateParams } from './helpers/validation';

export const procesarTexto = (texto, comandos) => {
  validateParams(texto, comandos);
  let newPhrase = '';
  for (let index = 0; index < comandos.length; index++) {
    const element = comandos[index].toUpperCase();
    if(newFunction[element]){
      if(element =='AGREGA'){
        let key = prompt('Ingrese una letra para agregar');
        if(key){
          const response =  newFunction[element](texto, key);
          newPhrase+= response;
        }
      }else if(element == 'BORRA'){
        let i = prompt('Ingrese una posicion para eliminar');
        if(i){
          const response =  newFunction[element](texto);
          newPhrase+= response;
        }
      }else{
        const response =  newFunction[element](texto);
        newPhrase+= response;
      }
    }else{
      alert(`${element} es una función no definida en el sistema!`);
    }
  }
  if(newPhrase.length >1000){
    return  alert('La frase no puede superar los 1000 caracteres!');
  }
  return alert(`Su frase es ${newPhrase}`);
};

