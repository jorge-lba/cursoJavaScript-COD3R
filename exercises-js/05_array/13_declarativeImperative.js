/**
 * 
 */

 const students = [
    { name: 'João', note: 7.9},
    { name: 'Maria', note: 9.2}
]

// Imperativo

let total1 = 0;
for(let i = 0; i< students.length; i++){
    total1 += students[i].note;
}
console.log(total1 / students.length);

// Declarativa
const getNote = student => student.note;
const sum = (total, current) => total + current;

const total2 = students.map(getNote).reduce(sum);
console.log(total2 / students.length);

/**
 * De preferencia para fazer seus codigos o modelo declarativo, para
 * ser mais utilizavel e facil de ler
 */