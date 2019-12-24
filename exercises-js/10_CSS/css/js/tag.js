const getColor = (tagName) =>{

    const colors = {
        p: "#388e3c",
        div: "#1565c0",
        span: "#e53935",
        section: "#f67809",
        ul: "#5e35b1",
        ol: "#dbc02d",
        header: "d81b60",
        nav: "64dd17",
        main: "00acc1",
        footer: "#304ffe",
        form: "#9f6581",
        body: "#25b6da",
        padrao: "#616161",    
    }

    return colors[ tagName ] ? colors [ tagName ] : colors.padrao    
}


document.querySelectorAll( '.tag' ).forEach( element => {
    const tagName = element.tagName.toLowerCase( )

    element.style.borderColor = getColor( tagName )

    if( !element.classList.contains( 'nolabel' ) ){
        const label = document.createElement( 'label' )
        label.style.backgroundColor = getColor( tagName )
        label.innerHTML = tagName
        element.insertBefore( label, element.childNodes[ 0 ] )
    }

} )