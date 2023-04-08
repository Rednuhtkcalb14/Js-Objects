import clients from "./clients.json"

function findClient(list, key, value) {
    return list.find((client) => client[key].includes(value))
}

const finded = findClient(clients, "nome", "Kirby")

console.log(finded)
