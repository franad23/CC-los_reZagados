import { validateParams } from './helpers/validation';

const procesarTexto = (texto, comandos) => {
  validateParams(texto, comandos);
};
procesarTexto();
