function getAlliatoryInteger(min, max){
    const value = Math.random()*(max-min) + min;
    return Math.floor(value);
}
let option = -1;
do{
    option = getAlliatoryInteger(-1,10);
    console.log(`Valor: ${option}`);
}while(option != -1)

console.log('Final');