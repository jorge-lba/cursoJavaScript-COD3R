/**
 * Clases - 
 */

class Launch{
    constructor(name = 'Generico', value = 0){
        this.name = name;
        this.value = value;
    }
}

class FinancialCycle{
    constructor(month, year){
        this.month = month;
        this.year = year;
        this.releases = [];
    }

    addReleases(...releases){
        releases.forEach(l => this.releases.push(l));
    }

    summary(){
        let consolidatedValue = 0;
        this.releases.forEach(l =>{
            consolidatedValue += l.value;
        })
        return consolidatedValue;
    }

}

const salary = new Launch('Salario', 45000);
const energyBill = new Launch('Energia', -220);

const account = new FinancialCycle(6,2018);
account.addReleases(salary, energyBill);

console.log(account.summary());