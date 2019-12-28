const $ = element => document.querySelector( element )

const div = $('div')
div.innerHTML = 'Texto alterado'
// div.outerHTML = 'Texto 2'
div.insertAdjacentHTML( 'beforebegin', '<p>Antes do Inicio</p>' )
div.insertAdjacentHTML( 'afterbegin', '<p>Depois do Inicio</p>')
div.insertAdjacentHTML( 'beforeend', '<p>Antes do fim</p>' )
div.insertAdjacentHTML( 'afterend', '<p>Depois do fim</p>' )

//Somente texto (sem tegs)
console.log(div.innerHTML);