// Variavel let e const tem escopo de bloco

{
    var a = 2;
    let b = 3;

    console.log(b);

}

console.log(a);
//console.log(b);

// Template String = ` `
const product = 'iPad';
console.log(`${product} é caro!`);

// Destructuring - retirar valores de dentro de um array ou objeto
const [f,b,c,d, ,k] = [4,3,2,1,3,5]; //Podemos pular um elemendo deixando o seu campo vazio

console.log(`a = ${f}, b = ${b}, c = ${c}, d = ${d}
Total = ${f+b+c+d}
Ultimo = ${k}`);

const [l,e,...tras] = 'COD3R';  //String é um array que guarda letra a letra
console.log(l,e,tras);

const {age: idade, name} = {name: 'Ana',age: 9}; // para renomear um objeto usamos sua key: newKey
console.log(idade, name);