/**
 * Closure é o escopo criado quando uma função é declarada
 * esse escopo permite a função acessar e manipular variáveis
 * externas á função.
 */

// Contexto léxico em ação

const x = 'Global';

function out(){
    const x = 'Local';
    function inside(){
        return x;
    }
    return inside();
}

const myFunctionOne = out();
console.log(myFunctionOne);