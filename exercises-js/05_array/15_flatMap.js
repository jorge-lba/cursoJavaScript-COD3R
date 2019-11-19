const school = [{
    name: 'Turma M1',
    students: [{
        name: 'Gustavo',
        note: 8.1
    },{
        name: 'Ana',
        note: 9.3
    }]
},{
    name: 'Turma M2',
    students:[{
        name: 'Rebeca',
        note: 8.9
    },{
        name: 'Roberto',
        note: 7.3
    }]
}]

const getNoteStudent = student => student.note;
const getNoteClass = clasS => clasS.students.map(getNoteStudent);

const note1 = school.map(getNoteClass);
console.log(note1);

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback));
}

const note2 = school.flatMap(getNoteClass);
console.log(note2);