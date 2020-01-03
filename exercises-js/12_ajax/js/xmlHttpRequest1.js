function ajax ( config ) {
    const xhr = new XMLHttpRequest( )
    xhr.open( config.metodo, config.url, true )

    xhr.onload = e => {
        if ( xhr.status === 200 ) {
           config.sucesso( xhr.response ) 
        }else if ( xhr.status >= 400 ) {
            config.erro( {
                codigo: xhr.status,
                texto: xhr.statusText
            } )
        }
    
    }
    
    xhr.send( )
}

function criarTabelas( estados ){
 
    const linhas = estados.map( estado => {

        const createElementTd = ( ) => document.createElement( 'td' )

        const tdId = createElementTd()
        tdId.innerHTML = estado.id

        const tdNome = createElementTd()
        tdNome.innerHTML = estado.nome

        const tdSigla = createElementTd()
        tdSigla.innerHTML = estado.sigla

        const tr = document.createElement( 'tr' )

        tr.appendChild( tdId )
        tr.appendChild( tdNome  )
        tr.appendChild( tdSigla )

        return tr

    } )

    const tabela = document.createElement( 'table' )
    linhas.forEach( linha => tabela.appendChild( linha ) )
    document.body.appendChild( tabela )
    
}

ajax( {
    url: '../dados/estados.json',
    metodo: 'GET',
    sucesso( resposta ) {
        const estados = JSON.parse( resposta )
        criarTabelas( estados )
    },
    erro ( e ) {
        const msg = document.createTextNode( `${e.codigo}: ${e.texto}` )
        document.body.appendChild( msg )
    }
} )
