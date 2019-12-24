const anonymous = process.argv.indexOf('-a') !== -1;
//console.log(anonymous);

if(anonymous){
    process.stdout.write('Fala Anônimo!\n');
    process.exit();
}else{
    process.stdout.write('Informe o seu nome: ');
    process.stdin.on('data', data =>{
        const name = data.toString().replace('\n','');
        process.stdout.write(`Fala ${name}\n`);

        process.exit();
    })
}