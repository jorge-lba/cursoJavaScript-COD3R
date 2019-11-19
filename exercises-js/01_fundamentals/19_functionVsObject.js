/**
 * Classes e Objetos são praticamenta a mesma coisa que
 * uma função.
 */

 console.log(typeof Object);

 // Instanciando uma função
 console.log(typeof new Object);

 const Client = function(){};
 console.log(typeof Cliente);

 // O resultado é o mesmo que o exempli Object
 console.log(typeof new Client);

// Instanciando uma classe
 class Product{};
 console.log(typeof Product);

 // O resultado é o mesmo dos exemplos anteriores
 console.log(typeof new Product);