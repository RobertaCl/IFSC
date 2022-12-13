var N1, N2;

function goIni() {
    N1 = window.prompt("Digite um número")
    N2 = window.prompt("Digite outro número")
    document.getElementById("N1").innerHTML = N1
    document.getElementById("N2").innerHTML = N2
    Calcular()
}

function Calcular() {
    if (parseInt(N1) >= parseInt(N2)) {
        document.getElementById("result").innerHTML = N1
    } else {
        document.getElementById("result").innerHTML = N2
    }
}