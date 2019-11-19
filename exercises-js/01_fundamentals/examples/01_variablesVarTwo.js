/**
 * Neste exemplo podemos ver um problema que pode ocorrer
 * com o var, mesmo estando dentro de um escopo ela foi
 * redefinida, assim trocando o valor original da mesma.
 */
var number = 1;
{
    var number = 2;
    console.log('Chamando dentro = ', number);
};

console.log('Chamada fora = ', number);

/**
 * Um exemplo como funcina total diferente caso seja 
 * declarada um var em um function
 */

 /**
  * Podemos ver que quando chamamos number dentro da function
  * antes de declarar, não conseguimos chamar a var externa
  * e o javaScript fala que number é undefined.
  */
function test(){
    console.log('Chamando number antes de definir um var numbem na function: ', number);
    var number = 10;
    return number
}

console.log("Chamando o resultado de number da function: ",test());
console.log('Chamando number fora da function: ', number);