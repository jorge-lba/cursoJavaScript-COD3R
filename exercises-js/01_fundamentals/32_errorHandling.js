/**
 * Tratamento de erro (Try/ Catch/ Throw)
 */

function postErroHandled(erro){
    //throw new Error('...');
    //throw 'Erro numero 253';
    throw{
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function printShoutName(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    }catch(e){
        postErroHandled(e);
    }finally{
        console.log("Final.")
    }
}

const obj = '';// = {name: 'Jorge'};
printShoutName(obj);