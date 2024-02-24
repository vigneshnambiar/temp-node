const _ = require('lodash')

const test = [1,[2,[3,[4]]]]
const newtest = _.flatMapDeep(test)
console.log(newtest)
console.log("Hello World")