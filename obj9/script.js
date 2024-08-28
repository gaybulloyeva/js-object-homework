function chiqar() {
    let obj = {
        id: 1, name: 'Usmon', job: 'developer'
    }

    let objClone = Object.assign({}, obj)

    console.log(obj, objClone)
}

chiqar()


