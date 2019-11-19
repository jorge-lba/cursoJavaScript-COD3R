const moduleA = require('./00_moduleSystem');
const moduleB = require('./01_moduleSystem');

/*
import moduleA from './00_moduleSystem';
import moduleB from './01_moduleSystem';
*/

console.log(moduleA.welcome);
console.log(moduleA.seeLater);
console.log(moduleA.hello);
console.log(moduleA);

console.log(moduleB.goodNight());
console.log(moduleB.goodMorning);
console.log(moduleB)