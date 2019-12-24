// Estratégis de criação de objetos

// Forma Literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtora
function Product(name, price, discount){
    this.name = name;
    price = price;
    this.getDiscount = () => {
        return price*(1 - discount);
    };
}

const p1 = new Product('Caneta', 7.99, 0.15);
const p2 = new Product('Notebook', 2980, 0.25);
console.log(p1.name, p1.getDiscount());
console.log(`${p2.name} apenas por ${p2.getDiscount()} Reais`);

// Como não tornamos price publico (this.) ele não pode ser acessado
console.log(p1.price);

// Função factory
function createEmployee(name, baseSalary, fouls){
    return{
        name,
        baseSalary,
        fouls,
        getSalary(){
            return((baseSalary/30) * (30 - fouls)).toFixed(2);
        }
    }
}

const f1 = createEmployee('João', 7890, 4);
const f2 = createEmployee('Maria', 11800, 1);
console.log(f1.getSalary(), f2.getSalary());

// Object.create
const daughter = Object.create(null);
daughter.name = 'Ana';
console.log(daughter);

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}');
console.log(fromJSON.info);

