/**
 * Hoisting joga var para cima, mesmo sendo declarado
 * depois de seu uso.
 */

 /** 
  * neste exemplo vemos que mesmo sendo declarado 
  * depois, o name foi identificado com undefined
  */
 console.log(name);
 var name = "Jorge";
 console.log('name = ', name);

/**
 * Já o let, ele não é encontrado e retorna um erro
 * na leitura.
 */
 console.log(age);
 let age = 27;
 console.log('age = ', age);
