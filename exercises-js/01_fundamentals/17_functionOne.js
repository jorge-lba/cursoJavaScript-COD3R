/**
 * Funções são um agrupamento de passos a serem 
 * executados(Algoritimo). 
 */

 // Função sem Retorno
 function printSum(valueOne, valueTwo){
    console.log(valueOne+valueTwo);
 };

 printSum(12,15);

 /**
  * No caso de um dos parametros não ser informado
  * o javaScritp considera undefined. Au fazer a soma de
  * um valor com undefined o resultado é Not a Number(NaN)
  */
 printSum(2);

 /**
  * PAra contornar esse problemas, podemos definir 
  * valores previos nos parametros.
  */

 function printMultiply(valueOne = 0, valueTwo = 0){
    console.log(valueOne*valueTwo)
 };

 printMultiply(2,2);
 printMultiply(2);

 // Função com retorno

 function sum(valueOne, valueTwo = 0){
    return valueOne+valueTwo;
 };

 console.log(sum(2, 3));
 console.log(sum(2));
 
 /**
  * Como foi passado apenas para um dos parametros
  * um valor inicial, o resultado da chamada se não
  * passermos nenhum valor é NaN
  */
 console.log(sum());