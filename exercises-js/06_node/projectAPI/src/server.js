//
const port = 3003;

const express = require('express');
const app = express();

app.get('/products',(req, res,next)=>{
    console.log("Middleware 1...")
    next();
})

app.get('/products', (req, res, next)=>{
    res.send({name: 'Notebook', price: 123.45}); //Converte para JSON automaticamente
})


app.listen(port, ()=>{      //Iniciando porta
    console.log(`Servidor executando na porta ${port}`);
});