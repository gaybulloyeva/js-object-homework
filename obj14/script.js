function chiqar() {

    let obj = {
        id: 1,
        name: 'Usmon',
        region: "Namangan"
    }


    arr = ['Andijon', 'Namangan', 'Qarshi', 'toshkent']


    if (arr.includes(obj.region)) {
        console.log(`bizning filallarimiz ${obj.region}da ham faoliyat yuritadi`)
    }

    else {
        console.log(`bizning filallarimiz faqat ${arr} viloyatlarda`)
    }
}
chiqar()






