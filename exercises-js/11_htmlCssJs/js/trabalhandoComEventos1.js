function navegarEm5s( e ){
    e.preventDefault()
    console.log( "Saindo em 5s" )
    setTimeout(() => {
        const link = e.target
        window.location.href = link.href
    }, 5000 )
}

// const a = document.querySelector( 'a' )
// a.onclick = navegarEm5s

const a = document.querySelector( '[espera-um-pouco]' )
a.onclick = navegarEm5s