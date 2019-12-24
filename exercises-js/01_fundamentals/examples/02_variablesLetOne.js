/**
 * Variaveis do tipo let são limitadas por qualquer tipo
 * de escopo. 
 */

var number = 1;
{
    let number = 2;
    console.log('dentro =', number);
}
console.log('fora= ', number);