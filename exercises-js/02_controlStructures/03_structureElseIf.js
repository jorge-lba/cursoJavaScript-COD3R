/**
 * Else If
 */

 /**
  * Exercicio antes do professor
  */

  const printResult2 = note =>{
      if(isNaN(note)){
        console.log('Valor Invalido!');
      }else if(note >= 7){
        console.log('Aprovado');
      }else{
        console.log('Reprovado');
      }
  }

  printResult2(10);

  // Aula---

  Number.prototype.entre = function(start, end){
        return this >= start && this <= end;
  }

  const printResult = note => {
      if(note.entre(9,10)){
          console.log('Quadro de Honra');
      }else if(note.entre(7,8.99)){
          console.log('Aprovado');
      }else if(note.entre(4,6.99)){
          console.log('Recuperação');
      }else if(note.entre(0,3.99)){
          console.log('Reprovado');
      }else{
          console.log('Valor Invalido');
      }
      console.log('Fim')
  }

 printResult(10);
 printResult(8.9);
 printResult(6.55);
 printResult(2.3);
 printResult(-1);
 printResult(11); 