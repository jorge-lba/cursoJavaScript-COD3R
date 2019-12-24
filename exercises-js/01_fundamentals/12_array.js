/**
 * Array é um vetor, uma variavel que pode amazernar
 * varios elementos de forma linear
 */

 const valores = [7.7, 8.9, 6.3, 9.2];
 console.log(valores[0], valores[3]);
 
 // Mesmo que o indice chamado não exite ele retorna
 // como undefined
 console.log(valores[4]);

 // Podemos atribuir valores em qualquer indice, mesmo
 // se ele não existir ainda.
 valores[4] = 10;
 console.log(valores);

 valores[8] = 9.9;
 console.log(`Podemos reparar que ao atribuir uma valor
 muito afrente em um indice retorna quantos estão vazios:
 ${valores}`);

 /**
  * Podemos tambem verificar qual é o tamanho de nosso
  * array usando o comando .length
  */
 console.log(valores.length);

 /**
  * O comando .length retorna a quantidade de itens,
  * não o ultimo indice. Se for utilizado para retornar
  * o ultimo indice, considere o valor -1
  */

 /**
  * Para adicionar valores na ultima posição, utilizamos
  * o comando .push() 
  * Lembre que javascript é uma linguagem fracamente
  * tipada, então os valores no array podem ser de
  * qualquer tipo
  */

  valores.push({id: 3}, false, null,"teste");
  console.log(valores);

  /**
   * Uma boa pratica para arrays é sempre colocar
   * valores de mesmo tipo.
   * Evite misturar para não ter problemas futuros.
   */

   /**
    * Podemos utilizar o comando .pop() para retirar 
    * o ultimo valor do array.
    * Se usado para retornar um valor, ele mostra o valor
    * e tambem retira do array
    */

    console.log(`Array antes do comando .pop(): `,valores);
    console.log(`Ultimo valor do array: ${valores.pop()}`);
    console.log(`Como o array ficou apoé o .pop(): `,valores);

    /**
     * Podemos retirar valores usando o comando delete
     * Os valores são removidos, mas os indices permanecem
     */

     delete valores[0];
     console.log(valores);

     // Arrays são do tipo object
     console.log(typeof valores)