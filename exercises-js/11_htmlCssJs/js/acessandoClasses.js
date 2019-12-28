const classes = document.querySelector( 'div' ).classList
classes.add( 'destaque' )
classes.remove( 'destaque' )
classes.toggle( 'destaque' )
console.log(classes.contains( 'destaque' ));
console.log( classes.length )
classes.toggle( 'destaque' )
console.log( classes.length )

classes.add( 'destaque' )
classes.add( 'destaque2' )
console.log( classes.length );

for(let c of classes) {
    console.log(c)
}

classes.forEach( c => console.log('forEach -', c) )
console.log([...classes])