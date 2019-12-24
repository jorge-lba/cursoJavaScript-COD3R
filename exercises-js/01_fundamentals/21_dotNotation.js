/**
 * Notação ponto.
 * Acessa membros de um objeto ou função
 */

console.log(Math.ceil(6.1));

const objectOne = {};
objectOne.name = 'Jorge';

console.log(objectOne.name);

/**
 * Ao usar this. , voce esta atribundo uma instancia 
 * para a função.
 * 
 * this. = esta
 */
function ObjectTwo (name){
    this.name = name;
    this.exec = function(){
        console.log('Exec...');
    }
}

/**
 * Desta forma estamos criando instancias independentes
 * Basicamente você esta pegando a esrutura da funçao
 * ObjectTwo e atribuindo em outra variavel.
 */
const objectThree = new ObjectTwo('Cadeira');
const objectFour = new ObjectTwo('Mesa');

console.log(objectThree.name);
console.log(objectFour.name);
objectThree.exec();
