var x = 0;

function clique() {
    x = window.prompt("Digite um número");
    document.getElementById("num").innerHTML = x;
    NUM();
}

function NUM() {
    if (x % 2 == 0) {
        document.getElementById("par-impar").innerHTML = "PAR";
    } else {
        document.getElementById("par-impar").innerHTML = "IMPAR";
    }
}