// Não aceita repetição e não é indexada

const teams = new Set()
teams.add('Vasco');
teams.add('São Paulo').add('Palmeiras').add('Cotinthians');
teams.add('Flamengo');
teams.add('Vasco');

console.log(teams)

console.log(teams.size);
console.log(teams.has('Vasco'));
teams.delete('Flamengo');
console.log(teams.has('Flamengo'))

const names = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const namesSet = new Set(names);

console.log(namesSet)