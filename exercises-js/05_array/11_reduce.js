const students = [
    {name:'João',note: 7.3 , scHolder: false},     
    {name:'Maria',note: 9.2 , scHolder: true},     
    {name:'Pedro',note: 9.8 , scHolder: false},     
    {name:'Ana',note: 8.7 , scHolder: true}     
 ]

 // Desafi0 1: Todos os alunos são bolsistas?

 // Desafio 2: Algum aluno é bolsista?
 let sumV = 0;
 const result = students.map( a => a.scHolder).reduce(function(accumulator = 0, current){
    if(current) sumV++;
 })
 

 if(sumV == students.length){
     console.log('Todos são bolsistas!');
 }else{
     console.log(`Apenas ${sumV} alunos são bolsistas!`);
 }

 // Professor

 const allScHolder = (result, scHolder) => result && scHolder;
console.log(students.map(a => a.scHolder).reduce(allScHolder));

const someScHolder = (result, scHolder) => result || scHolder;
console.log(students.map(a => a.scHolder).reduce(someScHolder));

