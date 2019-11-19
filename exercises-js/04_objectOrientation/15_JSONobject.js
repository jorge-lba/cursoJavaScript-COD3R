/**
 * JSON é um arquivo de texto, que representa um
 * objeto em javaScript entre outras liguagens
 */

const obj = { a: 1, b: 2, c: 3, soma(){ return a+b+c}};

// Como JSON é um arquivo de dados, podemos reparar que após 
// transformar nosso objeto em JSON e chamalo no console
// a função não é convertida.
console.log(JSON.stringify(obj));

//A forma abaixo não representa um JSON
//console.log(JSON.parse("{a:1, b:2, c:3}"));

// Forma correta de criação de um JSON
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));

console.log(JSON.parse('{"a":12, "b":"Jorge", "c": true, "d": {}, "e": []}'));

//JSON validation - ferramenta para validar o JSON