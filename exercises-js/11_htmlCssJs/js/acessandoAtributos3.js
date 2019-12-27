const lista = document.querySelector( '#compras' )

// Somente leitura
console.log( lista.attributes )
console.log( lista.attributes[0] )
console.log( lista.attributes.destino )
console.log( lista.attributes[ 'data-urgencia' ] )