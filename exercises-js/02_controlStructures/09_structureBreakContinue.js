/**
 * Desvios de fluxo
 */

/**
 * Comando Break funciona em switch, for e while
 */

/**
 * Comando Continue funciona em for e while
 */

 const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 for(let x in number){
     if(x == 5) break;
     console.log(`Numero: ${number[x]}`);
 }
// Continue para a repetição atual e vai para a proxima
for(let y in number){
    if(y == 5) continue;
    console.log(`Indice ${y} = ${number[y]}`)
}

external:
    for(let a in number){
        for(let b in number){
            if(a == 2 && b == 3) break external;
            console.log(`Par : ${a}, ${b}`);
        }
    }
    console.log('Fim');

/**
 * Evite usar Desvios de fluxo
 */