/**
 * Controlar o acesso a um objeto
 */

const sequence = {
    _value: 1,      // Por convenção é recomendado umar o _ no nome do atributo para sinbolizar que ele é privado
    get value(){
        return this._value++;
    },
    set value(value){
        if(value > this._value){
            this._value = value;
        }
    }
}

console.log(sequence.value, sequence.value);
sequence.value = 1000;
console.log(sequence.value, sequence.value);
sequence.value = 900;
console.log(sequence.value, sequence.value);