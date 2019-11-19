// Numeros divididos por 0 resulta em infinito
console.log(7/0);    

// Mesmo que o numero for uma string, o JavaStript faz o calculo
console.log('10'/2);    

// Se a string não for um numero o resultado é NaN(Not a Number)
console.log('Jorge'*2);

/**
 * O resultado retornado de 0.1+0.7 é de 0.79999
 * Por limitações de calculo, existe um consenso
 * de programação que a maioria das liguagens usam
 * 
 * Especificação I3E Standart for ...
 */
console.log(0.1 + 0.7);

// Se utilisar o toFixed(1) retorna o valor correto
console.log((0.1 + 0.7).toFixed(10));
console.log((0.1 + 0.7).toFixed(1));


