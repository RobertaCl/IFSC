for (i = 1 ; i <= 10 ; i++){
    console.log(i);
};

function tabuada (n){
    let tab = Number (prompt("Informe a tabuada!"));
    resultado = document.getElementById ("tabuadaR");
    let strResult="";
    for (let count = 0 ; count <= 10 ; count++){
        strResult += tab + "*" + count + "=" + (count * tab) + "<br>";
    }
    resultado.innerHTML = strResult;
}

