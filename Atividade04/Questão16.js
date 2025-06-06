function calcularSalarioLiquido(salarioBruto) {
  let descontoPercentual;
  let salarioBruto = 2000
  if (salarioBruto <= 1518.00) {
    descontoPercentual = 0.05; // 5%
  } else if (salarioBruto <= 2826.65) {
    descontoPercentual = 0.075; // 7,5%
  } else if (salarioBruto <= 3751.05) {
    descontoPercentual = 0.15; // 15%
  } else {
    descontoPercentual = 0.275; // 27,5%
  }

  let desconto = salarioBruto * descontoPercentual;
  let salarioLiquido = salarioBruto - desconto;

  console.log(`Salário Bruto: ${salarioBruto}`);
  console.log(`Desconto: ${desconto}}`);
  console.log(`Salário Líquido:${salarioLiquido}`);

  return salarioLiquido;
}
