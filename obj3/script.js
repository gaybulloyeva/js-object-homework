function chiqar() {
    const obj = {
        id: 1,
        name: "IT COMPANY",
        offline: true,
        online: true,
        individual: false
    }

    let boolValue = {}

    for (let key in obj) {
        if (typeof obj[key] === "boolean") {
            boolValue[key] = obj[key]
        }
    }
    console.log(boolValue)

}

chiqar()


