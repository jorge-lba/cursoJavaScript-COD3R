function Class(name, videoID){
    this.name = name;
    this.videoID = videoID;
}

// Quando usamos o operado new alem de criar um objeto, 
// aponta para função e seu prototype
const classOne = new Class('Bem vindo', 123);
const classTwo = new Class('Até breve', 456);
console.log(classOne, classTwo);

// Simulando o new

function novo(f, ...params){
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params)
    return obj;
}

const classThree = novo(Class, 'Bem vindo', 123);
const classFuor = novo(Class, 'Até Breve', 465);

console.log(classThree, classFuor);