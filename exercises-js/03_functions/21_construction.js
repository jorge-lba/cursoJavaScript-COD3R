function Person(name){
    this.name = name;

    this.speak = function(){
        console.log(`Meu nome é ${this.name}`);
    }
}

const p1 = new Person('Jorge');
p1.speak();