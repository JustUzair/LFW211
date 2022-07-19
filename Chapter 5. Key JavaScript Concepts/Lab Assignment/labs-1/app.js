'use strict'
//Implementation of Prefixer function
function prefixer(greet) {
    return (name) => `${greet}${name}`

}
//End of Implementation of Prefixer function
const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave')) // prints 'Hello Dave'
console.log(sayHiTo('Annie')) // prints 'Hello Annie'
console.log(sayByeTo('Dave')) // prints 'Goodbye Dave'