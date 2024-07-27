import { procesarTexto } from './desafio-12';

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
procesarTexto('holu',['INTERCAMBIA','DUP','AGREGA','AGREGA']);
