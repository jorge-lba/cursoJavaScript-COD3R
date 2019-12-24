// Com promises

// Sem promises

const http = require('http');

const getClass = letter =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letter.toUpperCase()}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res =>{
            let result ='';
    
            res.on('data', data =>{
                result += data;
            })
    
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(result));
                }catch(e){
                    reject(e);
                }
            })
        })
    })
}

//Modelo não recomendado

let names = [];
getClass('a').then(students =>{
    names = names.concat(students.map(a => `A: ${a.nome}`));
    getClass('b').then(students =>{
        names = names.concat(students.map(a => `B: ${a.nome}`));
        getClass('C').then(students =>{
            names = names.concat(students.map(a => `C: ${a.nome}`));
            console.log(names);
        })
    })
})

// Modelo mais indicado

Promise.all([getClass('a'),getClass('B'),getClass('c')])
    .then(class1 => [].concat(...class1))
    .then(students => students.map(students => students.nome))
    .then(names => console.log(names))
    .catch(e => console.log(e.message));

getClass('d').catch(e => console.log(e.message));