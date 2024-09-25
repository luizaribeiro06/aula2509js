function trecho(){
    let e1 = document.getElementById("cxaTexto1")

    let idade = parseInt(e1.value)
    console.log("A idade é: ", idade)

    if (idade <= 12){
        console.log("Você é criança");
    }
    if (idade > 12 && idade < 18){
        console.log("Você é adolescente");
    }
    if (idade >= 18 && idade < 45){
        console.log("Você é adulto");
    }
    if (idade > 45){
        console.log("Você é mais velho")
    }
}


