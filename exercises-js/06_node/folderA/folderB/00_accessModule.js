const moduleA = require('../../00_moduleSystem');
console.log(moduleA.hello);

const hello2 = require('./folderC');
console.log(hello2.ola2);

const c = require('./folderC');

const http = require('http');
http.createServer((req, res) =>{
    res.write('Bom dia, estamos online' + c);
    res.end();
}).listen(8080)