function ajax( config ) {
    const xhr = new XMLHttpRequest( )
    xhr.open( config.metodo, config.url, true )

    xhr.onreadystatechange = e => {
        if ( xhr.readyState === 4 ) {
            if ( xhr.status === 200 ) {
                config.sucesso( xhr.responseXML )
            } else if ( xhr.status >= 400 ) {
                config.erro( { 
                    code: xhr.status,
                    texto: xhr.statusText
                } )
            }
        }
    }

    xhr.send()
}

ajax( {
    url: "dados/estados.xml",
    metodo: 'GET',
    sucesso( resposta ) {
        const estados = resposta.getElementsByTagName( 'estado' )
        const itens = Array.from( estados ).reduce( 
            ( html, estado ) => html + `<li>${estado.attributes.nome.value}</li>`, ''
        )

        document.body.insertAdjacentHTML( 'beforeend', `<ul>${itens}</ul>` )
    },
    erro ( e ) {
        const msg = document.createTextNode( `${e.codigo}: ${e.texto}` )
        document.body.appendChild( msg )
    }
} )