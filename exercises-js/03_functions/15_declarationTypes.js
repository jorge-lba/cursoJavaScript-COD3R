/**
 * 
 */

 console.log(sum(3,4));
// Function Declaration
/**
 *  Quando declaramos desta forma uma função ela é
 * carregada pelo javaScript antes de ser chamada, independente
 * se foi chamada no inicio e declarada no final.
 */
function sum(x,y){
    return x+y;
}

// Function expression
const sub = function(x,y){
    return x-y;
}

// named function expression
const mult = function mult(x,y){
    return x*y;
}