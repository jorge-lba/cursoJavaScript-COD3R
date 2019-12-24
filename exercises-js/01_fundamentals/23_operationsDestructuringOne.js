/**
 * É um operador de desestruturação
 * Tire algo de uma estrutura, como um array e objeto
 * 
 */

 const person = {
     name: 'Ana',
     age: 5,
     address: {
         publicPlace: 'Rua ABC',
         number: 1000
     }
 }

 /**
  * Para usar o Destructuring em um objeto utilizamos
  * os {} e atribuimos os parametros que queremos
  * e depois chamamos o objeto com um = 
  * Como podemos ver abaixo.
  */
 const {name, age} = person;
 console.log(name, age);

 // Podemos tambem acriar novos nomes para os parametros
 const {name: n, age: a} = person;
 console.log(n, a);

 /**
  * Caso o atributo chamado não exista em retorna undefined
  * porem podemos atribuir um valor padrão.
  */
 const {lastName, goodHumored = true} = person;
 console.log(lastName, goodHumored);

 // PAra acessa um objeto dentro de outro usamos esta forma
 const {address: {publicPlace, number, postalCode}} = person;
 console.log(publicPlace, number, postalCode);