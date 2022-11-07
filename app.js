const _ = require('lodash')

const items = [1,[2,[3]]]
const allItems= _.flatMapDeep(items);

console.log(allItems);