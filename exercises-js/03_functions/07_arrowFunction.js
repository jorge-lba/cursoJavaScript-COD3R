/**
 * Alem de ser mais curta a Arrow Function ela tambem
 * tem um this. associado ao seu contexto.
 */

 let double = function(a){
     return 2*a;
 }

 // Função arrow
 let triple = a =>{
     return 3*a;
 } 
 triple = a => 3*a;     //Forma reduzida - returne implicito
 console.log(triple(Math.PI));

 let hi = () => 'Olá';
console.log(hi());

