//Funções

// Arrow (Função anonima)
const sum = (a,b) => a+b;
console.log(sum(2,3));

// Arrow Function (this)

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})

lexico1();
lexico2();

// Parametros default

function log(text = 'Node'){
    console.log(text);
}

log();
log(undefined);
log(null);
log('Teste');

// Operador rest

function total(...numbers){
    let total = 0;
    numbers.forEach(n => total += n);
    return console.log(total)
}

total(1,2,3);
total(5,8,3,6,9,4,1,2,3);