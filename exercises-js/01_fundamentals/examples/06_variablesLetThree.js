/**
 * Com o let, não temos problemas com a execução
 */

const funcs = [];

for(let number = 0; number < 10; number++){
    funcs.push(function(){
        console.log(number)
    })
}

funcs[2]();
funcs[8]();