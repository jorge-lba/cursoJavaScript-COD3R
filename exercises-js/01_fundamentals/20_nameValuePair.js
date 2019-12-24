/**
 * Par Nome/Valor
 */
/**
 * Contexto Léxico 1:  Abrange uma maior area do 
 * condigo.
 */
 const solutation = 'Opa';

 /**
  * Contexto Léxico 2: Abrange uma area mais restrita
  * do codigo como uma função.
  * 
  * Ao declarar uma variavel dentro de um contexto léxico
  * 2, ela se limita a ser usada apenas neste contexto
  * Mas se fou chamada uma variavel que não foi declarada
  * neste contexto, o JavaScript Busca em um outro contexto
  * mais abragente.
  */

function exec(){
    const solutation = 'Falaaa';
    return solutation;
}

// Objetos são grupos aninhados de pares nome/valor
const client = {
    name: 'Pedro',
    age: 30,
    weigth: 90,
    address: {
        publicPlace: 'Rua muito Legal',
        number: 123
    }
}
console.log(solutation);
console.log(exec());
console.log(client)