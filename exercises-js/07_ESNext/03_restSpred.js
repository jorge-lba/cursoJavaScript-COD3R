// Operador ... rest | Junta / spread | Espalha
// Usar rest com parâmetro de função


// usar spread com objeto
const employee = {name: 'Mria', salary: 12348.99}
const clone = {active: true, ...employee};

console.log(clone);

// usar spread com array

const groupA = ['João', 'Predro', 'Glória'];
const finalGroup = ['Maria','Rafael', ...groupA];

console.log(finalGroup);



