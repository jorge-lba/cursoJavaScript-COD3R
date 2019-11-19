const fs = require('fs');

const product = {
    name: 'Celular',
    price: 1249.99,
    descont: 0.15,
}

fs.writeFile(__dirname + '/12_generatedFile.json', JSON.stringify(product), err =>{
    console.log(err || 'Arquivo saldo!');
})