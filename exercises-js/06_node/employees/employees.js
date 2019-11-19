const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chinese = f => f.pais === 'China';
const woman = f => f.genero === 'F';
const lowestWage = (employ, employCurrent) =>{
    return employ.salario < employCurrent.salario ? employ : employCurrent;
}

axios.get(url).then(response => {
    const employees = response.data

    // Mulher chinesa com menor salário
    const func = employees
        .filter(chinese)
        .filter(woman)
        .reduce(lowestWage)  
        
    console.log(func)

});