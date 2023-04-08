const client = {
    name: "Daniel",
    age: 18,
    phoneNumber: "11 9999-999",
    funds: 250,
    payment: function (value) {
        if (value > this.funds) {
            console.log(`insufficient funds, balance available ${this.funds}`)
        } else {
            this.funds -= value
            console.log(`Payment made, new balance: $${this.funds},00`)
        }
    }
}

client.payment(240)