/**
 * String é uma cadeia de caracteres 
 * é representada por " ", ' ', ` `
 */

const school = "Cod3r";

// Função .charAt() retorna o caracter na posição
// solicitada, iniciando de 0
console.log(school.charAt(2));

/**
 * Caso o valor chamado não exista é retornado um 
 * valor vazio
 */

 console.log(school.charAt(6));

 /**
  * O comando .charCodeAt() retorna o valor UniCode
  * selecionando
  */

  console.log(school.charCodeAt(3));

  /**
   * Podemos tambem retornar o indice de um caracter
   * usando o comando .indexof('a') com  o caracter
   * desejado
   * 
   * obs.: JavaScript é case sensitive, reconhece letras
   * maiuscula e minusculas, caso o valor passado seja
   * maiusculo 'D' e na palavra seja minusculo 'd' 
   * ele retornara -1, pois não achou caracter compativel
   */

   console.log(school.indexOf('d'));

   /**
    * Podemos tambem selecionas quais itens da srting 
    * queremos ver com o comando .substring()
    */

    console.log(school.substring(1));   // Iguinora o caracter na posição 0
    console.log(school.substring(0,3)); // Percorre do indice 0 ou 2 (o valor 3 não é acessado) 

    /**
     * Podemos concatenar valores em string usando +
     * ou usando a função .concat() e o valor desejado
     */

     console.log('Escola ' + school + '!');
     console.log('Escola '.concat(school).concat(' !'));

    /**
     * Podemos subistituir caracteres de uma palavra usando
     * a função .replace("",""), passamos o valor que será 
     * subistituido e depois por qual sera usado
     */
     console.log(school.replace(3, 'e'));

    /**
     * O comando .split('') separa em array uma string
     * usando como separado o valor passado na função
     */
     
     console.log('Ana,Maria,Pedro'.split(','));
     



