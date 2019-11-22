// Objetos

const print = a => console.log(a);

//Object.values / Object.entris

const obj = {a:1, b:2, c:3};
print(Object.values(obj));

const obj2 = {
    a:1, b:2, 
    c: {a:1, b:8}
}

print(Object.values(obj2));
print(Object.entries(obj));
print(Object.entries(obj2));

// Melhorias na Notação Literal

const name = 'Carla';
const person = {
    name,
    ola(){
        return 'Oi gente!'
    },
}

print(person.name);
print(person.ola())

// Class

class Animal{}
class Dog extends Animal {
    speak(){
        return 'Au au!'
    }
}

print(new Dog().speak());