const lista = document.querySelector( 'div ul[destino="escritório"]' )
console.log( 'Elemento "ul"..............' )
console.log( 'childNodes', lista.childNodes );
console.log( 'destino', lista.id );
console.log( 'getAttribute', lista.getAttribute( 'destino' ) )
console.log( 'hasAttribute', lista.hasAttribute( 'destino' ) );
lista.setAttribute( 'destino', 'empresa' )
lista.setAttribute( 'status', 'aberto' )
lista.removeAttribute( 'destino' )
console.log( lista.dataset.urgencia );
lista.dataset.urgencia = 4
console.log( lista.getAttribute( 'data-urgencia' ) );

// Cuidados
const label = document.querySelector( 'label' )
console.log(label.for);
console.log(label.htmlFor);
console.log(label.getAttribute( 'for' ) );