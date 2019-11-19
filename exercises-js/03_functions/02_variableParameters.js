/**
 * Usando variaveis como parametros em funções
 */
/**
 * Mesmo se não for declarado um parametro na função
 * você pode enviar parametros e recuperalos.
 */
/**
 *  Usando a palavra arguments podemos recuperar os parametros.
 *  Arguments é um array interno de uma função que guarda
 * todos o parametros enviados a ela. 
 */

function sum(){
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(2,30,4,8,1,6,9));
console.log(sum());
console.log(sum(1));
console.log(sum(2.3, 2.4,'Test'));
console.log(sum('A','B','C'));