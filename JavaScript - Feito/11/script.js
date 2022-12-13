function onGo() {
    num = document.getElementById("container").value
    document.getElementById("tabuada").innerHTML = ""
    document.getElementById("num").innerHTML = num
    for (let i = 1; i <= 10; i++) {
        document.getElementById("tabuada").innerHTML += num + " x " + i + " = <b>" + (parseInt(i) * parseInt(num)) + "</b><br>"
    }
}