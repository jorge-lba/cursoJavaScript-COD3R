// Map

const technology = new Map()

technology.set('react', {framework: false});
technology.set('angular', {framework: true});

console.log(technology.get('react'))

const keys = new Map([
   [function(){}, 'Função'],
   [{}, 'Objeto'],
   [123, 'Numeros'] 
])

keys.forEach((value, key)=>{
    console.log(key, value);
})

console.log(keys.has(123));

keys.delete(123);
console.log(keys.has(123));

console.log(keys.size);
console.log(keys)