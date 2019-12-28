const body = document.querySelector( 'body' )
const createHTMLElement = ( element ) => document.createElement( element )
const createDiv = () => createHTMLElement( 'div' )

const div1 = createDiv()
div1.classList.add( 'destaque' )
div1.innerHTML = 'Primeiro'

const div2 = createDiv()
div2.setAttribute( 'wm-atributo', 'valor' )
div2.innerHTML = 'Segundo'

const p = createHTMLElement( 'p' )
p.innerHTML = 'Terceiro'

const div3 = createDiv()
div3.appendChild( p )

body.appendChild( div1 )
body.appendChild( div2 )
body.appendChild( div3 )

const texto = document.createTextNode( 'Antes...' )
div3.insertBefore( texto, div3.childNodes[0] )

const div4 = div3.cloneNode( true )
body.appendChild( div4 )
body.removeChild( div3 )
