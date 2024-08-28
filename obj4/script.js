function chiqar() {
    const obj = {
        id: 1,
        name: "IT COMPANY",
        offline: true,
        online: true,
        individual: false
    }

    let stringValue = {}

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            stringValue[key] = obj[key]
        }
    }
    console.log(stringValue)

}

chiqar()


