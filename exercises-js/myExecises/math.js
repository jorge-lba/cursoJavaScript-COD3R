//

const countIncrement = (start,increment) => start + increment

const sum = (value1,value2) => value1+value2;
const sub = (value1,value2) => {
    if(value2 < 0){
        return value1 + value2
    }else{
        return value1 - value2
    }
} 

const multiply = (value1,value2, result = value1) =>{
    for(let i = 0; i < value2-1; i++){
       result = sum(result,value1) 
    }
    return result
}

const divide = (value1, value2, point = 0,res='')=>{  
    if(point > 8)return res
    
    for(let i = 1; value1 >= value2; i++){
        value1 = sub(value1,value2)  
        res = i;
    }
    if(value1 != 0){
        res = res+testPoint(point)+divide(multiply(value1,10),value2,countIncrement(point,1))  
    }

    return res
}

const testPoint = (value) =>{
    return value < 1 ? "." : "" 
}

const power = (value1, value2,res = value1)=>{
    for(let i = 1 ; i < value2; i++){
        res = multiply(res,value1);
    }
    return res
}

console.log(sum(10,sub(8,sum(4,1))))
console.log(sum(2.2,2.2))
console.log(sub(2,-4))
console.log(multiply(2.2,100))
console.log(divide(10,3))
console.log(testPoint(2));
console.log(power(2.9,2))
