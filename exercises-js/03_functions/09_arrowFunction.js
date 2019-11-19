/**
 * O this. quando usado na função arrow é imutavel
 * sempre permanecera no contexto da arrow function que 
 * foi chamado. 
 */

let compareWithThis = function(parameter){
    console.log(this === parameter);
}

compareWithThis(global);

const obj = {}
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global);
compareWithThis(obj);

let compareWithThisArrow = parameter => console.log(this === parameter);
compareWithThisArrow(global);
compareWithThisArrow(module.exports);
compareWithThisArrow(this);

compareWithThisArrow = compareWithThisArrow.bind(obj);
compareWithThisArrow(obj);
compareWithThisArrow(module.exports);