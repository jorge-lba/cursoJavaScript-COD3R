/**
 * Como podemos ver não temos nenhum problema com o this.
 * usando a arrow function.
 */

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    },1000)
}

new Person;