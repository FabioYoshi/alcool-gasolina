function calcular() {
    let alcool = document.getElementById("alcool").value
    let gasolina = document.getElementById("gasolina").value
    let valorTotal = alcool / gasolina

    if (alcool != "") {
        if (gasolina != "") {
            if (valorTotal >= 0.7) {
                document.getElementById("resultado").innerHTML = "É melhor utilizar gasolina"
            } else {
                document.getElementById("resultado").innerHTML = "É melhor utilizar álcool"
            }
        }else {
            alert("Preencha o valor da gasolina")
        }
    }else {
        alert("Preencha o valor do álcool")
    }
}