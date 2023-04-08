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

client.address.push({
    street: "José de Alencar",
    neighborhood: "Grey Field",
    number: 809,
    apartment: false,
    complement: false,
})

const justApartments = client.address.filter(
    (address) => address.apartment === true
)

console.log(justApartments)
