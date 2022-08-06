'use strict'
const {
  promisify
} = require('util')

const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

// Promisify the functions

let promOpA = promisify(opA)
let promOpB = promisify(opB)
let promOpC = promisify(opC)


promOpA() // after opA completes print contents and return opB
  .then(contents => {
    print(null, contents)
    return promOpB()
  }).then(contents => { // after opB completes print contents and return opC
    print(null, contents)
    return promOpC() // after opC completes print contents
  }).then(print)