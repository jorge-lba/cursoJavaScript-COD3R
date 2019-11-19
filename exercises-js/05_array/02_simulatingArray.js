/**
 * Simulando um array a partide de um objeto
 */

const almostArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'};
console.log(almostArray);

Object.defineProperty(almostArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
});

console.log(almostArray[0]);

const myArray = ['Rafael', 'Ana','Bia'];
console.log(myArray, almostArray.toString());

const bible = {
    Title: 'Genesis',
    chapter: {
        1: 'Teste 1',
        2: 'Teste 2'
    }
}

//Teste Meu
console.log(bible);
console.log(bible.chapter);
console.log(bible.chapter[2].toString());