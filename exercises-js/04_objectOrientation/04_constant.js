/**
 * Porque conseguimos alterar um objeto criado em uma constante?
 */

 // Person aponta para memoria [FF] que aponta para o objeto {...}
 // A memória não pode ser alterada, mas o valor do objeto sim
 const person = {name: 'João'};
 person.name = 'Pedro';
 console.log(person);

 // Quando tentamos alterar o endereço de memoria de uma constante resulta em erro
 // person -> [AA] -> {...}
 // person = {name:'Ana'};

 // O comando Object.freeze() congela o objeto apontado, assim não sera posivel fazer atrinuições novas.
 Object.freeze(person);
 person.name = 'João';
 console.log(person);

 // Podemos criar objetos já congelados da seguinte forma
 const personConstant = Object.freeze({
     name: 'Jorge',
     lastName: 'Alegretti',
     age: 27
 })
 console.log(personConstant);