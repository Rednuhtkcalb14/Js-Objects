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

for (let key in client) {
    const valueType = typeof client[key]
    if (valueType !== "object" && valueType !== "function")
    console.log(`The value of the key "${key}" is ${client[key]}`)
}