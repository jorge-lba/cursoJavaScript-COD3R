/**
 * Cidadão de primeira classe
 * 
 * Função em JS é Frist-Class Object (Citizens)
 * Higher-order Function
 */

// Criar função de forma literal
function funOne(){

}

// Armazenar em uma Variavel
const funTwo = function(){

}

// Armazenar em um array
const array = [function (a,b){
    return a+b;
}, funOne, funTwo];

console.log(array[0](2,3));

//Armazenar em um atributo de objeto
const obj = {};
obj.speak = function(){return 'Opa'};
console.log(obj.speak());

// Passar uma função como parametro
function run(fun){
    fun();
}
run(function(){console.log('Executando...')});

// Uma função pode retornar/conter uma função
function sum(a, b){
    return function(c){
        console.log(a+b+c);
    }
}

sum(2,3)(4);