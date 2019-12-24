// Formas de declarar uma variavel do tipo numerico
const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1,peso2);

/**
 * Vamos verificar se o peso1 tem um valor
 * inteiro ou não
 * 
 * Comando: Number.isInteger()  
 * Tradução "Is Integer" - "É Inteiro"
 */

console.log("O valor é inteiro? ",Number.isInteger(peso1));
console.log("O valor é inteiro? ",Number.isInteger(peso2));

/**
 * Mesmo quando temos um numero com '.0' o JavaScript
 * considera inteiro, mas de for '.1' ou qualquer outro
 * valor ele considera numero fracional(com ponto flutuante) 
 * (float)
 */

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total/(peso1+peso2)

console.log(total);

/**
 * O commando .toFixed() tornas fixa as casas após a 
 * ',' para um controle maior do numero gerado.
 * Obs.: No exemplo abaixo, alem de ver o .toFixed() 
 * funcionando, podemos repara que ele faz arredondamento
 * se fou final 6+ erredonda para cima se for 5- para baixo
 */
console.log(media.toFixed(2));

const testNumerical = 7.7464886;

console.log(testNumerical.toFixed(6))
console.log(testNumerical.toFixed(5))
console.log(testNumerical.toFixed(4))
console.log(testNumerical.toFixed(3))
console.log(testNumerical.toFixed(2))

/**
 * Podemos transformar um valor numerico em string
 * com o comando .toString()
 */

 console.log(typeof testNumerical.toString())

 // Colocando o o valor 2 no toString(2), ele retorna
 // o numero em binario, 6 hexa e etc...

 console.log(testNumerical.toString(2))

// Outros comando ligados a tipo numericos.

 console.log(testNumerical.valueOf())
 console.log(testNumerical.toExponential(2))
 console.log(typeof testNumerical.toLocaleString())
 console.log(testNumerical.toPrecision(1))
