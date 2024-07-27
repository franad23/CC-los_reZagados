export const validateParams =(texto, comandos)=>{
  if (texto == '') return 'Se tiene que Ingresar un texto.';
  if (comandos?.length === 0) return 'Ingrese una opción dentro de los comandos. ';
  if(texto.match(/[a-zA-Z]/)) return 'Ingrese solamente palabras. No se aceptan ni numeros y/o caracteres especiales';
  if(!Array.isArray(comandos)) return 'Ingrese un array de comandos';
  if(!(comandos instanceof Array) ) return 'Ingrese un array de comandos';
};
