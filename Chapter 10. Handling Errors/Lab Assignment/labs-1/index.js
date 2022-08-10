'use strict'
const assert = require('assert')

function parseUrl(str) {
  //wrap the function body in try block and when an error occurs, just return null
  try {
    const parsed = new URL(str)
    return parsed
  } catch (err) {
    return null;
  }
}

assert.doesNotThrow(() => {
  parseUrl('invalid-url')
})
assert.equal(parseUrl('invalid-url'), null)
assert.deepEqual(
  parseUrl('http://example.com'),
  new URL('http://example.com')
)
console.log('passed!')