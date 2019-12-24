/**
 * Devido var ter um escopo muito amplo, temos
 * um problema com a execução abaixo
 */
const funcs = [];

for (var number = 0; number<10; number++){
    funcs.push(function(){
        console.log(number);
    });
}
funcs[2]();
funcs[8]();