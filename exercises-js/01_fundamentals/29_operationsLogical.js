/**
 * Operadores logicos.
 */

 /**
  * Tabela verdade and(e)
  * 
  * True and True   => True
  * True and False  => False
  * False and ---   => False
  */

  /**
   * Independente da quantidades de valores em and
   * para ser true todos devem ser true.
   * Logo tiver um false o resultado final é false
   */

/**
 * Tabela verdade or(ou)
 * 
 * True or ---      => True
 * False or True    => True
 * False or False   => False
 * 
 * Em or se qualquer valor for true o resultado é true
 */

 /**
  * Tabela xor(ou exclusivo)
  * 
  * True xor True   => False
  * True xor False  => True
  * False xor True  => True
  * False xor False => False
  * 
  * No xor apenas um dos valores devem ser true para o 
  * resultado ser true
  */

/**
 * Negação logica
 * 
 * !True    = False
 * !False   = True
 * 
 * Quando usamos um negação ele inverte a logica 
 */

// Solução desenvolvida antes do professor passar o esemplo

function my(){
    const jobOne = true;
    const jobTwo = false;
    
    if(jobOne && jobTwo){
        console.log("TV de 50'")
    }else if(jobTwo || jobOne){
        console.log("TV de 38'")
    }else{
        console.log(" Hoje não tem nada mesmo!")
    }
    
    if(jobOne || jobTwo){
        console.log("Bora sorvetão!")
    }else{
        console.log("Sem sorvete, somos fit!")
    }
}
my();

// Solução do professor.
function shopping(jobOne, jobTwo){
    const buyIceCream = jobOne || jobTwo;
    const buyTv50 = jobOne && jobTwo;
//  const buyTv32 = !!(jobOne ^ jobTwo);    // bitwise xor
    const buyTv32 = jobOne != jobTwo;       // Forma semelhante ao xor
    const healthy = !buyIceCream;           // Operador unario
    
    return{buyIceCream, buyTv32, buyTv50, healthy};
}

console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, true));
console.log(shopping(false,false));