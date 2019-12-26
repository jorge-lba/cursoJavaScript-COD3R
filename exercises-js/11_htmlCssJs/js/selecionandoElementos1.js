document.getElementById( 'primeiro' ).classList.add( 'destaque' )

const divs = document.getElementsByTagName( 'div' )
Array.from( divs ).forEach( e => e.classList.remove( 'destaque' ) )

const divsArray = [ ...divs ]
divsArray.forEach( e => e.classList.add( 'destaque' ))

const ultimosElementos = document.getElementsByClassName( 'ultimo' )
for ( let e of ultimosElementos ) {
    e.classList.remove( 'destaque' )
}