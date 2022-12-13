var N1, N2

function leitura() {
    N1 = document.getElementById("N1").value
    N2 = document.getElementById("N2").value
}

function soma() {
    leitura()
    document.getElementById("result").innerHTML = "Resultado: " + parseInt(N1) + parseInt(N2);
}

function sub() {
    leitura()
    document.getElementById("result").innerHTML = "Resultado: " + parseInt(N1) - parseInt(N2);
}

function multi() {
    leitura()
    document.getElementById("result").innerHTML = "Resultado: " + parseInt(N1) * parseInt(N2);
}

function div() {
    leitura()
    document.getElementById("result").innerHTML = "Resultado: " + parseInt(N1) / parseInt(N2);
}
