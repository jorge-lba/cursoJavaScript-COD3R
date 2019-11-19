/**
 * As linguagens tem escopo, que seria a limitação
 * dos blocos '{}'. 
 */

 /**
  * A varivael var não tem escopo, apenas em funções
  * então idempendento do local que for criada ela
  * pode ser chamada.
  */
{ { { { var title = 'Olá Mundo' } } } }
console.log(title);

function test(){
    var local = 123;
    console.log(`Chamando a variavel dentro da function: ${local}`)
};
test();

/**
 * No exemplo abaixo fizemos um teste que retorna o primeiro
 * valor verdadeiro, assim ele não chega nem a tentar acessar
 * a variavel local, se tentasse acessar daria um erro.
 */
console.log(`Tentando chamar a variavel fora da function: ${'Não foi possivel' || local}`)