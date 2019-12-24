const product =[
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Copo de Vidro', price: 12.45, fragile: true},
    {name: 'Copo de Plástico', price: 18.99, fragile: false}
]

console.log(product.filter(function(e){
    return (e.fragile !== false) && (e.price >= 500);
}))

const expensive = product => product.price >=500;
const fragile = product => product.fragile;

console.log(product.filter(expensive).filter(fragile));

console.log(product);