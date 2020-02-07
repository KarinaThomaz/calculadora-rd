let btnLimpar = document.querySelector('[value="CE"]');
let visor = document.querySelector('input');
btnLimpar.onclick = () => {
    visor.value = ''
}

let btnZero = document.querySelector('[value="0"]');
let btnUm = document.querySelector('[value="1"]');
let btnDois = document.querySelector('[value="2"]');
let btnTres = document.querySelector('[value="3"]');
let btnQuatro = document.querySelector('[value="4"]');
let btnCinco = document.querySelector('[value="5"]');
let btnSeis = document.querySelector('[value="6"]');
let btnSete = document.querySelector('[value="7"]');
let btnOito = document.querySelector('[value="8"]');
let btnNove = document.querySelector('[value="9"]');

let btnSoma = document.querySelector('[value="+"]');
let btnSubtracao = document.querySelector('[value="-"]');
let btnDivisao = document.querySelector('[value="/"]');
let btnMultiplicacao = document.querySelector('[value="*"]');
let btnIgual = document.querySelector('[value="="]');
let btnPonto = document.querySelector('[value="."]');

btnZero.onclick = () => visor.value += btnZero.value
btnUm.onclick = () => visor.value += btnUm.value
btnDois.onclick = () => visor.value += btnDois.value
btnTres.onclick = () => visor.value += btnTres.value
btnQuatro.onclick = () => visor.value += btnQuatro.value
btnCinco.onclick = () => visor.value += btnCinco.value
btnSeis.onclick = () => visor.value += btnSeis.value
btnSete.onclick = () => visor.value += btnSete.value
btnOito.onclick = () => visor.value += btnOito.value
btnNove.onclick = () => visor.value += btnNove.value
btnSoma.onclick = () => visor.value += btnSoma.value
btnSubtracao.onclick = () => visor.value += btnSubtracao.value
btnDivisao.onclick = () => visor.value += btnDivisao.value
btnMultiplicacao.onclick = () => visor.value += btnMultiplicacao.value
btnPonto.onclick = () => visor.value += btnPonto.value

btnIgual.onclick = () => {
    visor.value = eval(visor.value)
}
