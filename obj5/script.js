function chiqar() {
    const obj = {
        id: 1,
        name: "atirgul",
        color: "qizil",
        count: 10,
        price: "10$"
    }

    let stringValue = {}

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            stringValue[key] = obj[key]
        }
    }
    console.log(Object.values(stringValue))

}

chiqar()


