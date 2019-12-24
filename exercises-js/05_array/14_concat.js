const daughters = ['Valeskah', 'Cibalena'];
const children = ['Voxiton', 'Uesclei'];

const all = daughters.concat(children, 'Fulano');

console.log(all, daughters, children);

console.log([].concat([1,2], [3,4], 5, [[6,7]]));