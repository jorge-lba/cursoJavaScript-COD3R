document.querySelector( '#primeiro' ).classList.add( 'destaque' )

const select = ( element ) => document.querySelectorAll( element ) 
const destaqueOn = ( element ) => element.classList.add( 'destaque' )
const destaqueOf = ( element ) => element.classList.remove( 'destaque' )

const selecionar = seletor => select( seletor ).forEach( e => destaqueOn( e ) )
const deselecionar = seletor => select( seletor ).forEach( e => destaqueOf ( e ) )
const deselecionarTudo = () => deselecionar( '*' )

selecionar( 'div' )

deselecionarTudo()
selecionar( '.terceiro.ultimo' )

deselecionarTudo()

selecionar( ':not(#primeiro)' )

deselecionarTudo()

selecionar( ':nth-child(1)' )
deselecionar( 'div:nth-of-type(1)')

deselecionarTudo()

selecionar( '[wb-attrib]' )