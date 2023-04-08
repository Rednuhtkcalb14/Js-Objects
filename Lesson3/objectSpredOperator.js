const client = {
    name: "Wosvald",
    age: 34,
    phoneNumber: "11 9999-9999",
}

client.address = [{
    street: "Carlos Drumond",
    neighborhood: "Green Field",
    number: 198,
    apartment: true,
    complement: "flat 402"
}]

const letter = {
    addressee: client.name,
    ...client.address[0]
}

console.log(letter)
