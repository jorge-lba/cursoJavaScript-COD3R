/**
 * 
 */

function Person(){
    this.age = 0;

    setInterval(function(){
        this.age++;
        console.log(this.age);
    }/*.bind(this)*/,1000)
}

new Person;

/**
 * Outra forma de contornar a mudança do this.
 * é criar uma constante colocando this
 * Geralmente é utilizado o nome da constante de self
 */
function PersonTwo(){
    this.age = 0;
    const self = this;

    setInterval(function(){
        self.age++;
        console.log(self.age);
    },1000)
}

new PersonTwo;