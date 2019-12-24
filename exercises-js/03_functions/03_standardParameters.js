/**
 * Parametros Padrões
 */

 function sumOne(a, b, c){
     a = a || 1;
     b = b || 1;
     c = c || 1;
     return a+b+c;
 }

 console.log(sumOne(), sumOne(3), sumOne(1,2,3), sumOne(0,0,0));
 

function sumTwo(a, b, c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c
    return a+b+c;
}

console.log(sumTwo(), sumTwo(3), sumTwo(1,2,3), sumTwo(0,0,0));

// valor padrão es2015

function sumThree(a = 1, b = 1, c = 1){
    return a+b+c;
}

console.log(sumThree(), sumThree(3), sumThree(1,2,3), sumThree(0,0,0));
