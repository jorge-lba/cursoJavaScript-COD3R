/**
 * Clase 2 - Heranças
 */

 class Grandfather{
     constructor(lastName){
         this.lastName = lastName;
     }
 }

 class Father extends Grandfather{
     constructor(lastName, profession = 'Professor'){
        super(lastName);
        this.profession = profession;
     }
 }

 class Son extends Father{
     constructor(){
         super('Silva')
     }
 }

 const son = new Son;
 console.log(son);