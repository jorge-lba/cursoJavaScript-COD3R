class Person{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Meu nome é ${this.name}`);
    }
}

const p1 = new Person('Jorge');
p1.speak();

const person = name =>{
    return{
        speak: () => console.log(`Meu nome é ${name}`)
    }
}

const p2 = person('João');
p2.speak()