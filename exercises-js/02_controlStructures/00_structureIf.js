/**
 * Estrutura de controle If (se)
 */
/**
 * 
 * If trata se o resultado é ou não true, se sim
 * executa o comando
 */

 function goodNews(note){
    if(note >= 7){
        console.log('Aprovado');
    }
 }

 goodNews(5);
 goodNews(8);

 function isTrue(value){
    if(value){
        console.log('É verdade... '+ value);
    }
 }

 isTrue();
 isTrue(null);
 isTrue(undefined);
 isTrue(NaN);
 isTrue('');
 isTrue(0);
 isTrue(-1);
 isTrue(1);
 isTrue(' ');
 isTrue('?');
 isTrue([]);
 isTrue([10,5]);
 isTrue({});