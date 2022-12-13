function perguntaNome(){
    let nome = prompt("Informe seu nome!");
    resultado = document.getElementById("resultado");
    resultado.innerHTML += "Olá " + nome + "<br>";
}