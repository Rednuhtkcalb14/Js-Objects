/*
    Dictionary are pars of key and value, they have many diferents uses, one of 
then is save data
*/

const Person = {
    name: "Willian",
    age: 25,
    sin: 343434343
}

console.log(Person.name)
console.log(Person["name"])

const keys = ["name", "age", "sin"]

keys.forEach((key) => {
    console.log(`The key is ${key} your value is ${Person[key]}`)
})

Person.address = "New Zealand"
Person["number"] = "11 1111-1111"

Person.name = "Walian"

console.log(Person)

delete Person.number

Person.name = "Willian White"

console.log(Person)

/*
    To acces the value of the key in the dictionary, is possible to used the
name of then plus a dot so the key name:
dictionaryName.keyName
    Another way is using the "[]" and inside the kay name between "":
dictionaryName["keyName"]
*/