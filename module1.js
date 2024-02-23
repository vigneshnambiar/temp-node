//const name  = 'Secret';
//const name1 = 'vicky';
//const name2 = 'nambi';

const tst = require('./module2')
//const SayHi = require('./module3')
const tst1 = require('./module3')

/*const SayHi = (value) => {
    console.log(`Hi there ${value}`)
}*/

//console.log(tst);

tst1('vick')
tst1(tst.name1)
tst1(tst.name2)
