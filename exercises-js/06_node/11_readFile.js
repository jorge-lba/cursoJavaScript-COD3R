const fs = require('fs');
const way  = __dirname + '/11_file.json'

// Leitura sincrona...
const content = fs.readFileSync(way, 'utf-8');
console.log(content);

// Leitura assincrona...
fs.readFile(way, 'utf-8', (err, content) =>{
    const config = JSON.parse(content);
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./11_file.json');
console.log(config.db)

fs.readdir(__dirname, (err, archive) =>{
    console.log('Conteudo da pasta...');
    console.log(archive);
})