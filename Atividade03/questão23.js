function calcularFolhaPagamento() {
    const valorHora = parseFloat(prompt("Informe o valor da sua hora de trabalho:"));
    const horasTrabalhadas = parseFloat(prompt("Informe a quantidade de horas trabalhadas no mês:"));
    const salarioBruto = valorHora * horasTrabalhadas;

    let percentualIR = 0;
    if (salarioBruto <= 900) {
        percentualIR = 0;
    } else if (salarioBruto <= 1500) {
        percentualIR = 0.05;
    } else if (salarioBruto <= 2500) {
        percentualIR = 0.10;
    } else {
        percentualIR = 0.20;
    }
    const descontoIR = salarioBruto * percentualIR;
    const descontoINSS = salarioBruto * 0.10;
    const descontoSindicato = salarioBruto * 0.03;
    const fgts = salarioBruto * 0.11;
    const totalDescontos = descontoIR + descontoINSS + descontoSindicato;
    const salarioLiquido = salarioBruto - totalDescontos;

    console.log(`Salário Bruto : R$ ${salarioBruto.toFixed(2)}`);
    console.log(`IR : R$ ${descontoIR.toFixed(2)}`);
    console.log(`INSS (10%) : R$ ${descontoINSS.toFixed(2)}`);
    console.log(`Sindicato (3%) : R$ ${descontoSindicato.toFixed(2)}`);
    console.log(`FGTS (11%) : R$ ${fgts.toFixed(2)}`);
    console.log(`Total de descontos : R$ ${totalDescontos.toFixed(2)}`);
    console.log(`Salário Líquido : R$ ${salarioLiquido.toFixed(2)}`);
}
calcularFolhaPagamento();
