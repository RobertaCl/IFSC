function perguntaNumero(){
    let num1 = Number (prompt("Informe o primeiro número!"));
    let num2 = Number (prompt("Informe o segundo número!"));
    resultado = document.getElementById("resultado");
    resultado.innerHTML += num1 + " + " + num2 + " = " + (num1+num2) + "<br>";
}