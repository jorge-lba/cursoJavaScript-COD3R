//

for (let letters of 'Cod3r'){
    console.log(letters)
}

const togetherEcma = ['Map', 'Set', 'Promise']

for(let i in togetherEcma){
    console.log(i);
}

for(let together of togetherEcma){
    console.log(together);
}


// Testando utilidade para a API que estou projetando
const bible = ['genesis', 'exodo', 'numeros', 'Mateus'];

const searchBook = (book, bible)=>{
    
    for(let value of bible){
        if(book == value) return console.log("Achei");
        console.log(`${value} é diferente de ${value}`)
    }
}

searchBook('exodo', bible)
//-----------------------------------------------

const togetherMap = new Map([
   ['Map', {approached: true}],
   ['Set', {approached: true}],
   ['Promise', {approached: false}] 
]);

for(let together of togetherMap){
    console.log(together);
}

for(let key of togetherMap.keys()){
    console.log(key);
}

for(let values of togetherMap.values()){
    console.log(values)
}
for(let [key, value] of togetherMap.entries()){
    console.log(key, value);
}

const s = new Set(['a','b','c'])
for(let letters of s){
    console.log(letters);
}