const note = [4.3, 5.9, 10, 9.6, 1, 0];

for(let i in note){
    console.log(i, note[i]);
}

const person = {
    name: 'Ana',
    lastName: 'Silva',
    age: 29,
    weigth: 64
}

for(let attribute in person){
   console.log(`${attribute} = ${person[attribute]}`); 
}