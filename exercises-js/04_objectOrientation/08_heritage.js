/**
 * Heranças
 */

const ferrari = {
    model: 'F40',
    speedMax: 324
}

const volvo = {
    model: 'V40',
    speedMax: 200
}

// Podemos utilizar o comano .__proto__ para saber se o objeto tem uma herança
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MyObject(){}
console.log(typeof Object, typeof MyObject);
console.log(Object.prototype, MyObject.prototype);