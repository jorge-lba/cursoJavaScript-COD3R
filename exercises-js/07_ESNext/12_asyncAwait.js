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

// Recurso do ES8
// Objetivo de simplificar o uso de promises...

let getStudent = async () =>{
    const classA = await getClass('a')      // Await só funciona dentro de uma função async, com await só prossegui após receber uma resposta
    const classB = await getClass('B');
    const classC = await getClass('c');

    return [].concat(classA, classB, classC);
}// Retorna um objeto AsyncFunction

getStudent()
    .then(student => student.map(a => a.nome))
    .then(names => console.log(names));
