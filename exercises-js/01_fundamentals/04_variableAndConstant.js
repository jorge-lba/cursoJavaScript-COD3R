/**
 * As variaveis reservam um endereço de memória
 * para guardar os dados atribuidos a elas.
 */
var a = 3               // variavel 'a' vai armazenar o numero '3

/**
 * O nome 'a' atribuido para a variavel é para
 * fins didaticos.
 * 
 * Em aplicações as variaveis devem ter nomes bem
 * elaborados, de forma que seja nitida sua funcionalidade
 * e estaja no contexto do programa que está sendo
 * implementado.
 * 
 * Exemplo: Em um programa que recebe dados cadastrais 
 * de pessoas utilizariamos variaveis como VVVV
 */

let name           = 'Jorge';
let age            =  27;
let maritalStatus  = 'Casado';
let native         = 'Brasileiro';

/**
 * Utilizar nomes tanto em funções quanto variaveis 
 * bem elaborados e discritivos, ajuda na leitura e 
 * intepretação do codigo.
 * 
 * Torando mais facil para alterações e correções de bugs
 */

console.log(a+age, name, maritalStatus, native);

var numero1 = 10;
let numero2 = 17;

console.log(numero1, numero2);

var   numero1 = 14;
      numero2 = 23;

console.log(numero1, numero2);

numero1 = 9;
numero2 = 3;

console.log(numero1,numero2);

/**
 * Variaveis do tipo 'var', podem ser re-declaradas
 * atribuindo valores.
 * 
 * Variabeis do tipo 'let', não pode ser re-declarada
 * somente pode ser atrinuindo um valor chamando a 
 * variavel, como está acima.
 */

let     numero3 = 12;
const   numero4 = 15;

console.log(numero3, numero4);

numero3 = 14;
//numero4 = 10;

console.log(numero3, numero4);

/**
 * Constantes (const) não podem ter seus valores
 * alterados de forma alguma, nem atribuindo um 
 * valor e nem re-declarando a mesma.
 * 
 * Sempre de preferencia para usar 'let' e 'const'
 * Em qualquer parametro que não tenha motivo de mudança
 * sem utilize o const
 */