'use strict'
const {
    EventEmitter
} = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()
ee.on('error', err => {})
ee.emit('error', Error('timeout'))