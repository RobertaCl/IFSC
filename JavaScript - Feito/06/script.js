N1 = window.prompt ("Digite um número"); 
N2 = window.prompt ("Digite outro número");

document.getElementById("N1").innerHTML = N1;
document.getElementById("N2").innerHTML = N2;
document.getElementById("Result").innerHTML = parseInt(N1)+parseInt(N2);  