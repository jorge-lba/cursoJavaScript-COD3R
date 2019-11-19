/**
 * Operadores relacionais.
 * Quando fazemos operações relacionais o resultado
 * sempre sera boleano(verdadeiro ou falso).
 */

 /**
  * Devido javaScript ser uma libguagem fracamente tipada
  * ele tme alguns problemas com comparações, abaixo podemos
  * ver que mesmo um valor  '1' sendo uma string ele considera
  * iguam o 1 numerico.
  */
 console.log('01:', '1' == 1);
/**
 * Para contornar este problema temos que usar ===
 * assim cosidera-se que o esta comprarando o 
 * valor e o seu tipo.
 */
console.log('02:', '1' === 1);
//Exemplos de negação
console.log('03:', '3' != 3);
console.log('04:', '3'!== 3);

console.log('05:', 3 < 2);
console.log('06:', 3 > 2);
console.log('07:', 3 <= 2);
console.log('08:', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09:', d1 === d2);
console.log('10:', d1 == d2);
console.log('11:', d1.getTime() === d2.getTime());
console.log('12:', undefined == null);
console.log('13:', undefined === null);

/**
 * Sempre de preferencia em usar o estritamente igual (===)
 * para não ter problemas, e acabar minsturando seu codigo
 * e acabar gerando erros
 */