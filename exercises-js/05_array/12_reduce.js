Array.prototype.reduce2 = function(callback, initial){
    const indexInitial = initial ? 0 : 1;
    let accumulator = initial || this[0];
    for(let i = indexInitial; i<this.length; i++){
        accumulator = callback(accumulator,this[i], i, this)
    }
    return accumulator;
}

const sum = (total, value) => total+value;
const nums = [ 1, 2, 3, 4, 5, 6];

console.log(nums.reduce(sum,21));