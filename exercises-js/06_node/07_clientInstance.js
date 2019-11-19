const countA = require('./07_singleInstance');
const countB = require('./07_singleInstance');

const countC = require('./07_newInstance')();
const countD = require('./07_newInstance')();

countA.inc();
countA.inc();
console.log(countB.value);

countC.inc();
countC.inc();
console.log(countC.value, countD.value);