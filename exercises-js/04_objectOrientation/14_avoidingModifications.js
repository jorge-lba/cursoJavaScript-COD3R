/**
 * Evitando modificações
 */

//Object.precentExtensions - evita que adicione novos atributos em seu objeto
const product = Object.preventExtensions({
    name: 'Qualquer', price: 1.99, tag: 'Promoção'
})

console.log('Extencivel:', Object.isExtensible(product));

//Permite atribuir valores e até excluir atributos. Mas não colocar novos atributos.
product.name = 'Borracha';
product.description = 'Borracha escolar branca';
delete product.tag
console.log(product)

//Object.seal - selar
// Não podemos nem excluir nem adicionar atributos, mas podemos mudar os valores
const person = {name:'Julia', age: 35};
Object.seal(person);
console.log('Selado:', Object.isSealed(person));

person.lastName = 'Silva';
delete person.name;
person.age = 20;

console.log(person);

//Object.freeze = congela tudo
