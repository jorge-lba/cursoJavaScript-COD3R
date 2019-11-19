/**
 * Testando let em loop
 */

 var number = 0;
 for(let number = 0; number < 10; number++)console.log(number);
 console.log('Fora do for: ', number);

 /**
  * Neste exemplo podemos ver que usando o let para a variavel em for,
  * ela está limitada por seu escopo, assim o resultado
  * externo é a var.
  */