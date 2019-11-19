/**
 * 
 */

 /**
  * Quando declarmos uma variavel sem inicializar com valor
  * ela é undefined
  */
 let value;
 console.log(value);

 /**
  * Quando uma variavel recebe null, ela não tem
  * nenhum valor e tambem não aponta para um endereço
  * de memoria que tenha algum valor.
  */
 value = null;
 console.log(value);

 /**
  * Quando uma variavel puder ser null, não utilize 
  * comando para acessala, como .toString().
  * Por que o codigo vai gerar um erro
  */