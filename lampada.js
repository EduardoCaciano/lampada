const on = document.getElementById ('on');
const of = document.getElementById ('off');
const lampada = document.getElementById ('lampada');

function isLampadaQuebrada () {
    return lampada.src.indexOf ('lampadaQuebrada') > -1
}

function lampadaOn () {
    if (!isLampadaQuebrada () ) {
    lampada.src = './img/lampadaLigada.jpg';
    }
}

function lampadaOff () {
    if (!isLampadaQuebrada () ) {
    lampada.src = './img/lampadaDesligada.jpg';
    }
}

function lampadaQuebr () {
    if (!isLampadaQuebrada () ) {
    lampada.src = './img/lampadaQuebrada.jpg';
    }
}

on.addEventListener('click', lampadaOn);
of.addEventListener('click', lampadaOff);
lampada.addEventListener('mouseover', lampadaOn);
lampada.addEventListener('mouseleave', lampadaOff);
lampada.addEventListener('dblclick', lampadaQuebr);
