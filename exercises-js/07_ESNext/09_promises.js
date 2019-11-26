// Faz processamentos assincronos

// Multipos thens com uma função (Não pertence a aula)
// func = tipo string representando a função desejada, array = valores concatenados
const functionThenConcat = (func,...array)=>{
    let result = array.map(e =>{
        e = `.then(e=> e.concat('${e}'))`
        return e
    }).reduce((a,b) => a+b);

     return func + result + '.then(otherPhrase => console.log(otherPhrase))';
    
}

function talkAfter(secunds, phrase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(phrase)         // Aceita  apenas um parametro
        },secunds*1000)
    })
}

talkAfter(3, 'Chamada atendida!')
.then(phrase => phrase.concat('?!?'))
.then(otherPhrase => console.log(otherPhrase));

function talkAfter2(secunds, phrase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(phrase)         // Aceita  apenas um parametro
        },secunds*1000)
    })
}

talkAfter2(3, 'Chamada atendida!')
.then(phrase => phrase.concat('?!?'))
.then(otherPhrase => console.log(otherPhrase))
.catch(e => console.log('Erro na execução!'))

console.log(eval(functionThenConcat('talkAfter(3, \'Teste: \')','Multiplos then ', '1, ','2, ','3, ','4, ', 'etc..!' )))