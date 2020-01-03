function ajaxUpload( config ) {
    const xhr = new XMLHttpRequest()

    if( xhr.upload ) {
        xhr.upload.onprogress = e => {
            const atual = e.loaded
            const total = e.total
            const percentual = Math.floor( atual / total * 100 )
            config.progresso( { atual, total, percentual } )
        }
    }

    xhr.open( 'POST', config.url, true )
    xhr.send( config.formData )
}

document.querySelector( '[type=file]' ).onchange = e => {
    const formData = new FormData()
    console.log( formData )
    formData.append( e.target.name, e.target.files[0] )

    ajaxUpload( {
        url: 'upload',
        formData: formData,
        progresso( dados ){
            const progresso = document.querySelector( '.progresso' )
            progresso.innerHTML = JSON.stringify( dados )
        }
    } )
}