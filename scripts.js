function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let textos = document.getElementsByClassName("cur")
    let ondeSeraExibido = document.getElementById("ondeSeraExibido")
    let cont = 1

    setInterval(
        function textoTransicao() {
        if (cont >= textos.length) cont = 0;
        setTimeout(() => {
            fadeIn(ondeSeraExibido);
        }, 1000);
        ondeSeraExibido.innerHTML = textos[cont++].innerHTML;
        fadeOut(ondeSeraExibido);
        },
    7000);
 });

function fadeOut(ondeSeraExibido) {
    var opacity = 1;
    function decrease () {
        opacity -= 0.05;
        if (opacity <= 0){
            // complete
            ondeSeraExibido.style.opacity = 0;
            return true;
        }
        ondeSeraExibido.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}


function fadeIn(ondeSeraExibido) {
    var opacity = 0;
    function increase () {
        opacity += 0.05;
        if (opacity >= 1){
            // complete
            ondeSeraExibido.style.opacity = 1;
            return true;
        }
        ondeSeraExibido.style.opacity = opacity;
        requestAnimationFrame(increase);
    }
    increase();
}