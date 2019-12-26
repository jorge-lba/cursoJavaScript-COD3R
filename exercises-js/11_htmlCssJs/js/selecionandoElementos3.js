console.log( document.forms )
console.log( document.forms[ 0 ] )
console.log( document.getElementsByName( 'pesquisa' ) )
console.log( document.getElementsByTagName( 'form' ) )
console.log( document.pesquisa )
console.log( document.pesquisa.q )
document.pesquisa.q.value = 'Linux Brasil'
document.pesquisa.hl.value = 'en-us'
console.log( document.pesquisa.hl.selectedIndex )