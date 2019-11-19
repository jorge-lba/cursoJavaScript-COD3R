console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}
console.log('Escola Cod3r'.reverse());

Array.prototype.first = function(){
    return this[0]
}

console.log([1,23,36,4].first());
console.log(['a','b','c'].first());

//Não substitua comportamentos já existentes
String.prototype.toString = function(){
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse());