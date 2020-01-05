const gulp = require( 'gulp' )

gulp.task( 'default', ( ) => {
    gulp.start( 'copiar', 'fim' )
} )

gulp.task( 'copiar', [ 'antes1', 'antes2'], ( ) => {
    gulp.src( 'pastaA/**/*.txt' )
        // .pipe( transformasao1() )
        // .pipe( transformasao2() )
        .pipe( gulp.dest( 'pastaB' ) )
} )

gulp.task( 'antes1', ( ) => {
    console.log( 'antes1' )
} )

gulp.task( 'antes2', ( ) => {
    console.log( 'antes2' )
} )

gulp.task( 'fim', [ 'fim1', 'fim2' ])

gulp.task( 'fim1', ( ) => {
    console.log( 'Fim1' )
} )

gulp.task( 'fim2', ( ) => {
    console.log( 'Fim2' )
} )