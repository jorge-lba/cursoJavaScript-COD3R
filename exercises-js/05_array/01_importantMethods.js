const riders = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

riders.pop();  //Remove o ultimo elemento do array
console.log(riders);

riders.push('Verstappen'); //Add um elemento ao final do array
console.log(riders);

riders.shift(); //Removo o primeiro elemento do array
console.log(riders);

riders.unshift('Hamilton'); //Add um elemento no inicio do array
console.log(riders);

// Comando splice add/remove elementos

//add
riders.splice(2,0,'Bottas', 'Massa');
console.log(riders);

//Remover
riders.splice(3,1);
console.log(riders);

const someRiders = riders.slice(2); //Novo array gerado apartir do indice selecionado
console.log(someRiders);

const someRiders2 = riders.slice(1,4); // Novo array apartir do indice até o indice -1
console.log(someRiders2);