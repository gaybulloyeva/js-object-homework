function chiqar() {
    const obj = {
        id: 1,
        name: "IT COMPANY"
    }

    let numValue = {}

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            numValue[key] = obj[key]
        }
    }
    console.log(numValue)

}

chiqar()


