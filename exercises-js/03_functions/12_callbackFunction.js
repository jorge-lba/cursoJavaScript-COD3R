const note = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback

let noteLow = [];
for(let i in note){
    if(note[i] < 7){
        noteLow.push(note[i])
    }
}

console.log(noteLow);

// Com callback

noteLowTwo = note.filter(function(note){
    return note < 7;
})
console.log(noteLowTwo);

const lessTahnSeven = note => note < 7;
const noteLowThree = note.filter(lessTahnSeven);
console.log(noteLowThree);