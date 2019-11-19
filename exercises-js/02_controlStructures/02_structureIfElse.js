/**
 * Estruturas If Else
 */

 const printResult = note => {
     if(note >= 7){
        console.log('Aprovado');
     }else{
        console.log('Reprovado');
     }
 }

 printResult(10);
 printResult(4);

 // Tome cuidado com este erro!!!
 printResult('Epa!');