/**
 * Variaveis boleanas retornam verdadeiro ou falso
 */

 // Declarando varivel como falsa
 let isActive = false;
 console.log(isActive);

 // Atribuindo o valor verdadeiro
 isActive = true;
 console.log(isActive);

 // Podemos utilizar outros valores como mumero e strings
 isActive = "jorge";

 // Porem para chamalo, temos que usar uma negação
 // para ele não seu chamado com um number.
 // Para falso '!' e Verdadeiro '!!'
 console.log(!isActive);
 console.log(!!isActive);

 /**
  * A logica ocorre como uma pergunta
  * !isActive: isActive é diferente de isActive? Falso
  * !!isActive: isActive é igual a isActive? Verdadeiro
  * 
  * Vamos utilizar o if para ver a logica
  */

  /**
   * Aqui esqtamos perguntando se o valor é diferente
   * do outro, se ele é retonas true se não false
   * Representa o '!'
   */
  if(isActive != isActive){
    console.log('É diferente: ',true);
  }else{
    console.log('É diferente: ',false);
  };

  /**
   * Agora perguntamos se o valor deiferente
   * é diferento do valor, se sim volta true
   * e se não false
   * Representado por '!!'
   */
  if(!isActive != isActive){
    console.log('É igual: ',true);
  }else{
      console.log('É igual: ', false);
  };

  /**
   * De forma simples, podemos considerar que um '!'
   * anula o outro. E a pergunta se tonar:
   * Valor é igual a Valor?
   */

   // Alguns casos retornam falso mesmo com !!

   console.log('Os falsos...');
   console.log(!!0);
   console.log(!!'');
   console.log(!!null);
   console.log(!!NaN);
   console.log(!!undefined);

