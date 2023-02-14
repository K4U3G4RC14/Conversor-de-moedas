const btn = document.getElementById("btn")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9

const convet_value = () => {
    const real_value = document.getElementById("input-real").value
    const text_real = document.getElementById("text-real")
    const other_money = document.getElementById("other-money")

    text_real.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'brl' }
    ).format(real_value);

    if (select.value === "US$ Dolar Americano") {
        other_money.innerHTML = new Intl.NumberFormat('pt-US',
            { style: 'currency', currency: 'USD' }
        ).format(real_value / dolar);
    }

    if (select.value === "€ Euro") {
        other_money.innerHTML = new Intl.NumberFormat('pt-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(real_value / euro);
    }
}

const change_currency = () => {
    const currency_text = document.getElementById("currency")
    const flag = document.getElementById("money-flag")


    if (select.value === "US$ Dolar Americano") {
        currency_text.innerHTML = "Dólar Americano"
        flag.src = "./assets/estados-unidos (1) 1.svg"
    }

    if (select.value === "€ Euro") {
        currency_text.innerHTML = "Euro"
        flag.src = "./assets/Design sem nome 1.svg"
    }

    convet_value()
}


btn.addEventListener('click', convet_value)
select.addEventListener('change', change_currency)