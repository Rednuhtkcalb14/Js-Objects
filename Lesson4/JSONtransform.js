const jsonRequire = require("./JSON.json")

const objectToString = JSON.stringify(jsonRequire)

console.log(objectToString)
console.log(typeof objectToString)

const stringToObject = JSON.parse(objectToString)

console.log(stringToObject)
console.log(typeof stringToObject)
