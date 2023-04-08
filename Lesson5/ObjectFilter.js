const clients = require("./clients.json")

function aptNoComplement(clients) {
    return clients.filter((client) => {
        return (client.endereco.apartamento && !client.endereco.hasOwnProperty("complemento"))
    })
}

console.log(aptNoComplement(clients))
