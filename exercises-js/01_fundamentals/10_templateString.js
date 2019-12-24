/**
 * Template String = Sequencia de modelo
 * 
 */

 const nome = "Rebeca";

 // Modelo anteriormente usado(Ainda funciona)
 let concatenation = "Olá " + nome + '!';

 console.log(concatenation);

 // Novo modo, mais pratico.

 concatenation = `Olá ${nome}, tudo bem?`;

 console.log(concatenation)

 /**
  * Utilizando as `` Podemos colocar as variaveis 
  * diretamente no corpo da string usando ${}
  * 
  * Tambem podemos quebrar as linha dentro da string
  */

  concatenation = `Como foi a viajem?
  Passou na casa da sua amiga ${nome}?`;

  console.log(concatenation);

  /**
   * Dentro do comando ${}, podemos usar qualquer 
   * comando em JavaScript
   */

   const phrase = 'Hoje o dia está muito lindo!'

   /**
    * Podemos deixar todas as letras de uma string
    * maiuscula usando o comando .toUpCase()
    */
   console.log(`Frase: ${phrase.toUpperCase()}`);

   /**
    * E podemos deixar tambem minuscula usando o 
    * comando .toLowerCasa()
    */
   console.log(`Frase: ${phrase.toLowerCase()}`);
   