//
const port = 3003;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const database = require('./database')

app.use(bodyParser.urlencoded({extended: true}));

app.get('/products', (req, res, next)=>{
    res.send(database.getProducts()); //Converte para JSON automaticamente
})

app.get('/products/:id', (req, res, next)=>{
    res.send(database.getProduct(req.params.id))
})

app.post('/products',(req, res, next)=>{
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/products/:id',(req, res,next)=>{
    const product = database.saveProduct({
        id: parseInt(req.params.id),
        name: req.body.name,
        price: req.body.price,
    })
    res.send(product); // Saida em JSON
})

app.delete('/products/:id', (req, res, next) =>{
    const product = database.deleteProduct(req.params.id);
    res.send(product);
})

app.listen(port, ()=>{      //Iniciando porta
    console.log(`Servidor executando na porta ${port}`);
});