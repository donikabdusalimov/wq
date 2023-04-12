let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]


let ask = prompt('Привет! С какой компании хотите выбрать машину?').toLowerCase()
let ask2 = prompt('Какую машину хотите купить?')
for (let i of cars) {
    if (ask == i.company) {
        console.log(i);
        if (ask2 == i.model) {
            console.log(i);
            let a = confirm(`Стоимоить машины ${i.price} вы согласны прообрести?`)
            if (a == true) {
                let b = +prompt('Приведите деньги')
                if (b > i.price) {
                    let c = b - i.price
                    alert(`Это ваше сдаче ${c}`)
                } else if (b < i.price) {
                    alert('У вас не хватает денег')
                } else {
                    alert('Вы совершили покупку!')
                }
            }
        }
    }
}
