function chiqar() {
    let obj = {
        id: 1,
        name: 'Usmon',
        age: 34,
        year: 1990
    }


    let now = new Date().getFullYear()
    let org_age = now - obj.year

    if(org_age!==obj.age){
        console.log("xato ma'lumot kiritdingiz")
    }

    else{
        console.log(org_age)
    }
}
chiqar()






