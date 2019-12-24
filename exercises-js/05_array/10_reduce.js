const students = [
   {name:'João',note: 7.3 , scHolder: false},     
   {name:'Maria',note: 9.2 , scHolder: true},     
   {name:'Pedro',note: 9.8 , scHolder: false},     
   {name:'Ana',note: 8.7 , scHolder: true}     
]

const result = students.map(a => a.note).reduce(function(accumulator, current){
    console.log(accumulator, current);
    return accumulator+current;
},10);

console.log(result);

const resultName = students.map(a => a.name).reduce(function(accumulator, current){
    console.log(accumulator, current);
    return accumulator+', '+current;
});

console.log(resultName);
