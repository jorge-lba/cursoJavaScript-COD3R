// tagged templates - Processa o template dentro de uma função

function tag(parts, ...values){
    console.log(parts);
    console.log(values);
    return 'Outra string'
}

const student = 'Gui';
const situation = 'Aprovado';

console.log(tag `${student} está ${situation}`);
