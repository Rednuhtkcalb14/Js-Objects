const client = {
    name: "Wosvald",
    age: 34,
    phoneNumber: "11 9999-9999",
}

// client.address = [{
//     street: "Carlos Drumond",
//     neighborhood: "Green Field",
//     number: 198,
//     apartment: true,
//     complement: "flat 402"
// }]

const clientKeys = Object.keys(client)

console.log(clientKeys)

if (!clientKeys.includes("address")) {
    console.error("Is necessary an address")
}
