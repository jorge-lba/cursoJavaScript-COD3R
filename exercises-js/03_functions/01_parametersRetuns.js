/**
 * Parametros e Retornos são opcionais.
 */

 function area(width, heigth){
     const area = width * heigth;
     if(area > 20){
         console.log(`Valor acima do permitido: ${area}m2.`)
     } else {
         return area;
     }
 }

 console.log(area(2,2));
 console.log(area(2));
 console.log(area());
 console.log(area(5,5,2));
 console.log(area(5,8));
 

