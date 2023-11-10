const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-converted")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".value-converted") // outras moedas

    
    const dolarToday = 5.2
    const euroToday = 6.2


    if(currencySelect.value == "dolar"){ // se o select estiver selecionado o valor dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    
    }

    if(currencySelect.value == "euro"){ // se o select estiver selecionado o valor euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.getElementById("coin-name")
    const currencyImg = document.querySelector(".flag-countries")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/usa.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()

}

currencySelect.addEventListener("change" , changeCurrency)
convertButton.addEventListener("click", convertValues )
