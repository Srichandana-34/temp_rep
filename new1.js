//every file in node is amodule

//modules - encapsulated code (only share minimum)

const names = require('./names') //uses the module names
const sayHi = require('./module2')
const data = require('./modules3.js')
require('./mind-grenade')
//sayHi("Bunny");
//sayHi(names.munny)
//sayHi(names.bunny)

//console.log(names);
//console.log(data);