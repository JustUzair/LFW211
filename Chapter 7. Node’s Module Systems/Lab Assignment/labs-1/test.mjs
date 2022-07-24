import {
    createRequire
} from 'module'
import {
    pathToFileURL
} from 'url'
import assert from 'assert'
const {
    resolve
} = createRequire(
    import.meta.url)
const {
    default: add
} = await import(pathToFileURL(resolve('.')).toString())

assert(typeof add === 'function', 'function exported')

assert(add(15, 7) + add(11, 9) === 42, 'correct function exported')

console.log('passed!')