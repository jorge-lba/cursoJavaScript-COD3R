// Coleção dinamica de pares chave. valor

// Podemos iniciar um objeto sem colocar atributos e depois adicionalos
const product = new Object;
product.name = 'Cadeira';
product['marca do produto'] = 'Generico'; // Está forma de atribuição pode ser usada mas não é recomendado, pois você só poderar chamala com os []
product.price = 220.90;

console.log(product);

// Tambem podemos excluir atributos.
delete product['marca do produto'];
delete product.price;

console.log(product);

// Neste formato estamos criando o objeto com o atributos
const car = {
    model: 'A4',
    value: 89500,

    // Podemos criar um objeto dentro de outro...
    owner: {
        name: 'Raul',
        age: 56,
        address: {
            publicPlace: 'Rua ABC',
            number: 171,
            zipCode: '18052-000'
        }
    },
    
    // Podemos tambem criar um array de objetos
    conductor: [{
        name: 'Junior',
        age: 19
    },{
        name: 'Jorge',
        age: 27
    }],

    // Podemos criar funções
    calcSafeValue: function(){
        //...
    }
}

car.owner.address.number = 1000;
car.owner.address.publicPlace = "Rua mil";
console.log(car.owner);

delete car.conductor;
delete car.owner.address;
delete car.calcSafeValue;
console.log(car);

// Podemos acessar atributos não existentes, porem vão retornar undefined
console.log(car.conductor);

// Porem tentar acessar um atributo dentro de um outro atributo que não existe gera erro
//console.log(car.conductor.number);