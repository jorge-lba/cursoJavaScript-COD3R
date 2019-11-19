/**
 * Notações literais
 */

 const a = 1;
 const b = 2;
 const c = 3;

 // Anteriormente tinhamos que escrever o objeto desta forma para colocar um atributo com o mesmo nome de uma variavel
 const obj1 = {
     a: a,
     b: b,
     c: c
 }

 // Agora não é mais necessario como vemos abaixo
 const obj2 = {
     a,
     b,
     c
 }
 console.log(obj1, obj2);

 // Atribuir o valor de uma variavel ao nome de um atributo 
const nameAttr = 'name';
const valueAttr = 'Jorge';
const obj3 = {
    [nameAttr]: valueAttr
}
console.log(obj3);

// Para atribuir uma função ao objeto, não é necessaria colocar a palavra reservada function
const obj4 = {
    func(){
        //...
    }
}