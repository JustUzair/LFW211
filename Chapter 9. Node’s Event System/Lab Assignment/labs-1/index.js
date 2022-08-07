'use strict'
const assert = require('assert')
const {
  EventEmitter
} = require('events')

const ee = new EventEmitter()
let count = 0
setInterval(() => {
  ee.emit('tick')
}, 100)
//Use once to listen to an event and un-register once the event takes place
ee.once('tick', listener)

function listener() {
  count++
  setTimeout(() => {
    assert.equal(count, 1)
    assert.equal(this, ee)
    console.log('passed!')
  }, 250)
}