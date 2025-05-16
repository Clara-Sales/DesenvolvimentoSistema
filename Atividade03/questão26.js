function verificarVencedor() {
    let time1 = 'Vasco'
    let golsTime1 = 3
    let time2 = 'Flamengo'
    let golsTime2 = 1
    let resultado;

    if (golsTime1 > golsTime2) {
        resultado = `O vencedor é: ${time1}`;
    } else if (golsTime2 > golsTime1) {
        resultado = `O vencedor é: ${time2}`;
    } else {
        resultado = "EMPATE";
    }
    alert(resultado);
}
verificarVencedor();
