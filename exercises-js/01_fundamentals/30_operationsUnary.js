/**
 * Operadores unários utiliza apenas um valor.
 */

 let numberOne = 1;
 let numberTwo = 2;

 /**
  * Podemos utilixar o decremento ou incremento tanto
  * antes quanto depois da variavel.
  */
 numberOne++;
 console.log(numberOne);

 --numberOne;
 console.log(numberOne);

 /**
  * Quando a operação ++ ou -- esta antes da variavel
  * ela tem prioridade na resolução.
  * Podemos ver abaixo que o incremento foi efetuado
  * depois a compração e por ultimo o decremento.
  */
 console.log(++numberOne === numberTwo--);
 console.log(numberOne, '< >',numberTwo);
/**
 * Podemos ver que no resultado final eles são diferentes
 * porem por causa da prioridade ele retornou que 
 * eram iguais.
 */

 /**
  * Agora desta forma nenhum teve prioridade, assim 
  * ele fez a comparação e depois os incremento e decrementos
  */
 numberOne = 3;
 numberTwo = 3;

 console.log(numberOne-- === numberTwo++);
 console.log(numberOne, '< >',numberTwo);

 /**
  * Obs.: Sempre deixe o seu código o mais simples
  * possivel.
  * 
  * E tambem sempre tente refaturar seu cédigo, para
  * ficar o melhor possivel.
  * 
  * Um ótimo código é aquele que mesmo sem comentários
  * você lê e entende sem dificuldade.
  */
