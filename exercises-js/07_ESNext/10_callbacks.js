// Sem promises

const http = require('http');

const getTurma = (letter, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letter.toUpperCase()}.json`
    http.get(url, res =>{
        let result ='';

        res.on('data', data =>{
            result += data;
        })

        res.on('end', ()=>{
            callback(JSON.parse(result));
        })
    })
}

let names = [];
getTurma('a', students =>{
    names = names.concat(students.map(a => `A: ${a.nome}`));
    getTurma('b', students =>{
        names = names.concat(students.map(a => `B: ${a.nome}`));
        getTurma('C', students =>{
            names = names.concat(students.map(a => `C: ${a.nome}`));
            console.log(names);
        })
    })
})