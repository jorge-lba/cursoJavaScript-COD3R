/**
 * Factory
 */

// Minha solução para o problema da aula anterior

function product(name, price){
    return{
        name,                              // Se a variavel tiver o mesmo nome do parametro, não é necessario colocar nome: nome
        price: (price).toFixed(2),
        withDiscount: (price - (price*0.1)).toFixed(2)
    }
}

console.log(product('mesa',100));
console.log(product('PS4',4283.89));
console.log(product('Xbox',2990.893));