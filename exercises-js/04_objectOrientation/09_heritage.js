// Cadei de prototipos (prototype chain)

// Referenciando herança
Object.prototype.attr0 = 'prototype' //NÃO FAÇA ISSO//
const grandfather = {attr: 'A'};
const father = {__proto__: grandfather, attr2: 'B', attr3: 'OLOCO'};
const son = {__proto__: father, attr3: 'C'};
/**
 * Ao chamar um atributo não existente em um objeto, 
 * caso tenha rança o JS vai buscar até o prototupe
 * No exemplo abaixo, chamamos no filho um atributo
 * que temos apenas no avô.
 * O resultado mostra que foi procurado no filho e não encontrado
 * após foi procurado no pai e não foi encontrado, depois
 * poricurado no avô e ai sim foi achado e retornado seu valor.
 */

console.log(son.attr);
console.log(son.attr0);

//Quando chamamos um atributo que tenha tanto no objeto quanto 
// na herança, a prioridade é o atributo do objeto.
console.log(son.attr2, son.attr3);

const car = {
    speedCurrent: 0,
    speedMax: 200,
    acceleration(delta){
        if(this.speedCurrent + delta <= this.speedMax){
            this.speedCurrent += delta;
        }else{
            this.speedCurrent = this.speedMax;
        }
    },
    status(){
        return `${this.speedCurrent} Km/h de ${this.speedMax} Km/h`
    }
}

const ferrari = {
    model: 'F40',
    speedMax: 324
}

const volvo = {
    model: 'V40',
    status(){
        return `${this.model} : ${super.status()}`;
    }
}

/**
 * Obs.: Differente da função, quando o this. é chamado por herança
 * ele mesmo estando no pai ele representa o filho.
 */

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

ferrari.acceleration(100);
console.log(ferrari.status());

volvo.acceleration(200);
console.log(volvo.status());
