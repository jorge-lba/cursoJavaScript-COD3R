/**
 * JavaScript é uma linguarem de tipagem dinamica
 * No C/C++ au declarar uma variavel temos que
 * colocar seu tipo, já no JavaScript não
 * (Fracamente Tipada)
 */

/**
 * Abaixo temos um "exemplo" como seria chamada uma
 * variavel 'int' em C/C++
 * 
 * Variaveis 'int' só podem receber numeros
 */

var intNumero = 10;     

/**
 * Agora temos uma variavel em JavaScript, ela pode
 * receber qualquer tipo de valor.
 */

let variavel = 10;

console.log("variavel intNumero: ", intNumero);
console.log('variavel: ',variavel);

// Vamos alterar de um numero para um nome

variavel = 'Jorge';

console.log('Agora atribuimos uma string na variavel: ', variavel);

/**
 * Podemos ver neste exemplo que podemos modificar
 * os tipo de dado na variavel, sem a nessecidade de
 * fazer qualquer alteração de tipo(type)
 */

/**
 * Por questões de boas praticas, evitamos atribuir
 * outros tipos de dados a uma mesma variavel.
 * Se você criou uma variavel para amarzenar numeros
 * não de valores de outros tipos como texto(string).
 * 
 * Assim evitamos surpresas e bugs em nossos codigos.
 */

/**
 * Comando typeof é utilizado para ver qual o tipo
 * de valor que está em uma variavel, assim podemos
 * identificar e mostrar alterações
 */

let mudandoTipo = 12;

console.log('Tipo da variavel: ', typeof mudandoTipo);

mudandoTipo = 'Jorge Luiz';

console.log('Tipo da variavel após alteração: ', typeof mudandoTipo);

// Eviter nomes genéricos e siglas
// Exmplos ruins

let valor = '';
let numero = 1;
let pqp = false;  // Produro Quimico Perigoso... kkkk