function simularPoupanca(valorMensal, taxaJuros, meses){
        let saldo = valorMensal*taxaJuros
    for(let i = 0; i <= meses; i++){
        saldo = saldo * taxaJuros
    }
}simularPoupanca(1000,0.48,18)
alert(`Total acumulado: ${saldo.toFixed(2)}`);