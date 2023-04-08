const clients = require("./clients.json")

function sortClients(list, property) {
    return list.sort((a, b) => {
        if (a[property] > b[property]) {
            return 1
        } else if (a[property] < b[property]) {
            return -1
        } else {
            return 0
        }
    })
}

const clientSorted = sortClients(clients, "nome")

console.log(clientSorted)
