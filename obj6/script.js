function chiqar() {
    let person = {
        id: 1,
        name: 'Odil',
        age: 78,
        child: {
            id: 1,
            name: 'Ali',
            age: 48,
            child: {
                id: 1,
                name: 'Umar',
                age: 20
            }
        }
    }

    let sum = 0

    for (let key in person) {
        if (key === "age") {
            sum += person[key]
        }
    }

    for (let key in person.child) {
        if (key === "age") {
            sum += person.child[key]
        }
    }

    for (let key in person.child.child) {
        if (key === "age") {
            sum += person.child.child[key]
        }
    }

    console.log(sum)

}

chiqar()


