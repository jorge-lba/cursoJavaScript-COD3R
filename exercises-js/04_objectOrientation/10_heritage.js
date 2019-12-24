const father = {name: 'Pedro', hairColor: 'preto'};

const daughter = Object.create(father);
daughter.name = 'Ana';

console.log(daughter.hairColor);

const daughterTwo = Object.create(father, {
    name: {value: 'Bia', writable: false, enumerable: false}
})

console.log(daughterTwo.name);
daughterTwo.name = 'Carla';

console.log(`${daughterTwo.name} tem cabelo ${daughterTwo.hairColor}`);

console.log(Object.keys(daughter));
console.log(Object.keys(daughterTwo));

for(let key in daughterTwo){
    console.log(key);
    daughterTwo.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
}