/**
 * Funções importantes de Object
 */

const person = {
    name: 'Rebeca',
    age: 2,
    weigth: 13
}

// Retorna as chaves do objeto(nome dos atributos)
console.log(Object.keys(person));

// Retorna os valores das (chaves)atributos
console.log(Object.values(person));

// Retorna as chaves e valores
console.log(Object.entries(person));

Object.entries(person).forEach((key) => {
    console.log(`${key[0]}: ${key[1]}`);
});

// Definindo uma propriedade de um objeto
Object.defineProperty(person,'dateOfBirth',{
    enumerable: false,       // Não é visivel
    writable: false,        // Não pode ser modificada
    value: '01/01/2019'
});

// Não podemos alterar o s dados de nascimento, mas podemos ler diretamente
// Porem não se pode puxar indiretamente como vemos abixo.
person.dateOfBirth = '10/05/2015';
console.log(person.dateOfBirth);
console.log(Object.keys(person));
console.log(person);

// Object.assing
/**
 * Este comando faz com que o primeiro objeto declarado receba
 * os parametros do proximos.
 */
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2);

// Podemos perceber que se o pramatro for igual o ultimo sobrescreve o primeiro.
console.log(obj);

//Congelar um objeto
Object.freeze(obj);
obj.c = 123;
obj.a = 456;
console.log(obj);

// Teste criar uma chave modifical em um freeze
Object.defineProperty(person,'test',{
    enumerable: true,       
    writable: true,        
    value: 'Posso modificar mesmo com o freeze?'
})

console.log(person.test);
person.test = 'Sim, assim eu posso modificar!'
console.log(person.test);

//Sobrescrever uma chave existente
Object.defineProperty(person,'name',{
    enumerable: true,
    writable: true,
    value: "Oloco"
})
console.log(person.name);
person.name = 'Mudou?';
console.log(person);

// Referenciando herança
Object.setPrototypeOf(objetoAtual, objetoHeranca);

