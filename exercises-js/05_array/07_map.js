Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const cart = [
    '{"name": "Borracha", "price": 3.45}',
    '{"name": "Caderno", "price": 13.90}',
    '{"name": "Kit de Lapis", "price": 41.22}',
    '{"name": "Caneta", "price": 7.50}'
]

//Retornar um array apenas com os preços

//Minha solução
const transformObject = e => JSON.parse(e);


const cart2 = cart.map2(transformObject);
let cart3 = [];

cart2.forEach(function(name, index){
    cart3[index] = cart2[index].price.toString();
    console.log(`R$ ${cart3[index].replace('.',',')}`);

})

//Professor

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.price;

const carrinho = cart.map2(paraObjeto).map2(apenasPreco);
console.log(carrinho)