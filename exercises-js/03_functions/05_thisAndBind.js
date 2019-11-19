/**
 * This sempre se refere ao contexto onde ele se aplica,
 * no caso abaixo ele está eum um objeto person
 * Então quando ele é chamado ele se refere a este objeto
 * this.salutation == person.salutation
 */

const person = {
    salutation: 'Bom dia',
    speak(){
        console.log(this.salutation);
    }
}
console.log('Teste 1: '+ person.salutation);
console.log(`Teste 2: `);
person.speak();

/**
 * Neste exemplo podemos ver um erro ao chamar a função
 * como ela foi atribuida a uma variavel no contexto global
 * o camando this.salutation vai ser chamado no contexto
 * global onde ele não foi definido.
 * this.salutation == window.salutation
 */

const speakError = person.speak;
speakError();

/**
 * Neste exemplo podemos ver uma forma de contarnar este erro
 * que é usando o comando .bind()
 * O baind vai subistituir o this. pelo objeto. referenciado
 * dentro dele.
 * person.speak.bind(person) == person.speak()
 */
const speak = person.speak.bind(person);
speak();