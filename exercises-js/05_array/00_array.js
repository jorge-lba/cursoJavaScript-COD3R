/**
 * Array em JS é um objeto.
 * Nativamente não existe array no javascript
 */

 console.log(typeof Array, typeof new Array, typeof []);

/**
 * Arrays são dinamicos em JS, voce pode
 * adicionar e remover os dados dele.
 */

let approved = new Array('Bia', 'Carlos', 'Ana');
console.log(approved);

approved = ['Carlos', 'Bia', 'Ana'];
console.log(approved[0]);
console.log(approved[1]);
console.log(approved[2]);
console.log(approved[3]);

approved[3] = 'Paulo';
console.log(approved[3]);

approved.push('Abia');
console.log(approved.length)

approved[9] = 'Rafael';
console.log(approved.length);
console.log(approved[8] === undefined);

console.log(approved);

// Comando .sort() organisa por ordem alfabetica
approved.sort();
console.log(approved);

delete approved[1];
console.log(approved);

approved = ['Bia', 'Carlos', 'Ana'];

//Comando .splice() - add, remove e add/remove elementos (Ao remove completamente)
//.splice(iniciaEm, qtDeleta,'adcionaElementos', ...)
approved.splice(1,1);
console.log(approved);

