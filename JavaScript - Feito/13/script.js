var ps, alt, IMC

function calcular() {
    ps = document.getElementById("peso").value
    alt = document.getElementById("altura").value

    alt = parseFloat(alt) / 100
    IMC = parseFloat(ps) / (parseFloat(alt) * parseFloat(alt))
    if (IMC < 18.5) {
        document.getElementById("IMC").innerHTML = "Abaixo do peso - Tome Cuidado!"
        document.getElementById("img").style = "background-image: url(img/abaixopeso.png);"
    } else if (IMC < 24.99) {
        document.getElementById("IMC").innerHTML = "Peso Ideal!"
        document.getElementById("img").style = "background-image: url(img/normal.png);"
    } else if (IMC < 29.9) {
        document.getElementById("IMC").innerHTML = "Levemente acima do peso"
        document.getElementById("img").style = "background-image: url(img/sobrepeso.png);"
    } else if (IMC < 34.9) {
        document.getElementById("IMC").innerHTML = "Obesidade - grau I"
        document.getElementById("img").style = "background-image: url(img/obesidade1.png);"
    } else if (IMC < 39.9) {
        document.getElementById("IMC").innerHTML = "Obesidade - grau II (severa)"
        document.getElementById("img").style = "background-image: url(img/obesidade2.png);"
    } else {
        document.getElementById("IMC").innerHTML = "Obesidade - grau III (mórbida)"
        document.getElementById("img").style = "background-image: url(img/obesidade3.png);"
    }
}