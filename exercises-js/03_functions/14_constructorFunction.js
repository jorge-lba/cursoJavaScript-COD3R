/**
 * Funções construtoras
 */

function Car(speedMax = 200, delta = 5){
    // Atributo privado
    let curretSpeed = 0;

    // Mmetodo publico
    this.speedUp = ()=>{
        if(curretSpeed + delta <= speedMax){
            curretSpeed += delta;
        }else{
            curretSpeed = speedMax;
        }
    }

    //Metodo publico
    this.getCurretSpeed = () =>{
        return curretSpeed;
    }
}

const uno = new Car;
uno.speedUp();
console.log(uno.getCurretSpeed());

const ferrari = new Car(350,20);
ferrari.speedUp();
ferrari.speedUp();
ferrari.speedUp();
console.log(ferrari.getCurretSpeed());

console.log(ferrari);