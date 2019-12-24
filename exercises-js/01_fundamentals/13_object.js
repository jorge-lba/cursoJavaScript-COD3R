/**
 * Em javaScript podemos fazer um objeto dinamico
 * podendo atribuir valores em momentos posteriores.
 */

 const product1 = {};

 // Aqui estamos criando um identificador e atrinuindo um valor
 // Podem ser criados identificadores com espaços
 product1.name = "Celular Ultra Mega";
 product1.price = 4998.90;
 product1['Cool discount'] = 0.60; // Evite atributos com espaço

 // Chamando o objeto é retornado todos os indices e valores.
 console.log(product1);

 // Podemos tambem chamar um indice especifico, para 
 //ver seu valor.(Dessa forma recebemos somento o valor)
 console.log(product1.price);

 console.log(`De ${product1.price.toFixed(2)} Por Apenas ${(product1.price*product1['Cool discount']).toFixed(2)}`);

 const product2 ={
    name: 'Camisa Polo',
    size:{
        p:{ 
            size: "Tamnho P",
            shoulderWidth: '50 cm',
            height: '80 cm',
            price: 79.90
        },
        m:{ 
            size: "Tamnho M",
            shoulderWidth: '60 cm',
            height: '90 cm',
            price: 89.90
        },
        g:{ 
            size: "Tamnho G",
            shoulderWidth: '70 cm',
            height: '100 cm',
            price: 99.90
        }
    }
 };

 console.log(product2.name, product2.size.g)

 // json é uma forma textual de representar objestos
 console.log("jason é representado da seguinte forma: ",'{"name":"Jorge", "age":27}');
