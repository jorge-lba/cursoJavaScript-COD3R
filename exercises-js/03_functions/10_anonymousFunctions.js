/**
 * Funções anonimas.
 */

const sum = function(x,y){
    return x+y;
}

const printResult = function(a, b, operation = sum){
    console.log(operation(a,b));
}

printResult(3,4);
printResult(4,3,function(x,y){
    return x-y
});

printResult(4,3,(x,y)=> x * y);

const person = {
    speak: function(){
        console.log('Opa');
    }
}

person.speak();