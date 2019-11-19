/**
 * Podemos atribuir uma função em uma variavel.
 */

// Função anonima VVVV
const printSum = function(valueOne, valueTwo){
    console.log(valueOne+valueTwo);
};

printSum(2,3);

// Arrow Function (Nome deve ser conferido)

const printMultiply = (valueOne, valueTwo) =>{
    return valueOne*valueTwo;
};

console.log(printMultiply(2,5));

/**
 * A Arrow Function tem algumas funcionalidades diferentes
 * alem de ser mais simples de escrever como vimos acima
 * ela tem um modo de retorno implicito.
 */

const printDivision = (valueOne, valueTwo) => valueOne / valueTwo;

console.log(printDivision(10, 2));

// Em caso de apenas um valor podemos tirar os ()

const printValue = value => console.log(value);
printValue('Jorge Luiz');