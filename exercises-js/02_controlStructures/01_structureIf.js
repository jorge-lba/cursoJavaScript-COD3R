/**
 * Caso seja feito um If sem as {} ele vai executar
 * o primeiro comando adicionado após ele.
 */
function test(number){
    if(number > 7)
        console.log(number);
        console.log('Final');
}

test(6);
test(8);

/**
 * Caso utilizemos o ; após os parametros do if
 * ele vai executar todo o bloco sempre como abaixo.
 */
function testTwo(number){
    if(number > 7);{
        console.log(number);
    }
}

testTwo(6);
testTwo(8);