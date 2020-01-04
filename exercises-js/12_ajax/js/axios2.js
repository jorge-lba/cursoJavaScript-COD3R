function exebirResultado ( id, dados ) {
    const texto = JSON.stringify( dados )
    document.getElementById( id ).innerHTML = texto
}

axios.get( 'parOuImpar', {
    params: {
        numero: 6
    }
} ).then( resp => exebirResultado( 'get', resp.data.resultado ) )

axios.post( 'formulario', {
    nome: 'João',
    sobrenome: 'Silva'
} ).then( resp => exebirResultado( 'post', resp.data ) )