const names = require('./names') //uses the module names
const sayHi = require('./module2')
const data = require('./modules3.js')
require('./mind-grenade')
//sayHi("Bunny");
//sayHi(names.munny)
//sayHi(names.bunny)

//console.log(names);
//console.log(data);
const os= require('os') //build-in module

//info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds 

console.log(`The system uptime is ${os.uptime()}`);

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)

