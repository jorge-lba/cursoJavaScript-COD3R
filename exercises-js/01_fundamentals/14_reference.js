/**
 * 
 */

 const a = {name: 'Teste'};
 console.log(a);

/**
 * Quando atribuimos o um objeto a outro, ele aponta a
 * referencia de memoria, assim ambos tem o mesmo
 * endereço, fazendo que as modificações 
 * ocorram em ambos, mesmo quando for feita em um
 */
 const b = a;
 console.log(b);
 
 b.name = 'Opa';
 console.log(a);

 /**
  * Quando trabalhamos com tipos primitivos, a atribuição
  * é de valor e nao de  endereço de memorias,
  * assim o novo valor não afeta o variavel anterior.
  */
 let c = 3;
 let d = c;
 d++;

 console.log(c);
 console.log(d);

/**
 * Exemplo de como a logica opera
 * objeto:
 * Variavel A recebe endereço FF que tem valor 10
 * Variavel B recebe A
 * 
 * A [FF] = [10]
 * B [FF]
 * 
 * Logo o valor de B é o mesmo que A e qunado modificamos
 * o valor de B como temos o mesmo endereço FF ele modifica
 * o valor de A
 * 
 * primitivos:
 * Variavel A é o endereço FF e recebe o valor 12
 * Variavel B é o endereço AA
 * 
 * [FF] = [10]
 * [AA] = [FF]
 * 
 * Quando fazemos essa atribuição, o B que representa o 
 * endereço AA recebe o valor 10, que é o valor dentro do 
 * endereço de A que é FF.
 */