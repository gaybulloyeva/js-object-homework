function chiqar() {
    let person = {
        id: 1,
        name: 'Umar',
        surname: 'Ismoilov',
    }

    // 1-shart
    person.ielts = 5.5

    // 2-shart
    if (person.ielts >= 5.5) {
        person.student = true
        console.log("qabul qilindi")
    }

    else {
        console.log("qayta topshirish kerak")
    }

    // 3-4-shart
    if (person.ielts >= 5.5) {
        person.parol = Math.floor(Math.random() * 1000 + person.id)
        person.student = true
        console.log(person)
    }

    else {
        person.student = false
        console.log(person)
    }

    // 5-shart
    function kirish(parol, name) {
        if (person.parol == parol && person.name == name) {
            console.log("hush kelibsiz")
        }

        else {
            console.log("parol yoki name xato")
        }
    }


    kirish(906, "Umar")
}
chiqar()






