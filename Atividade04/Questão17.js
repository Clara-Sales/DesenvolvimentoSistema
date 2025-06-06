function calcularGorjeta(precoConta) {
  const porcentagemGorjeta = 0.10;
  const valorGorjeta = precoConta * porcentagemGorjeta;
  const totalConta = precoConta + valorGorjeta;

  console.log(`Valor da conta: R$ ${precoConta(25)}`);
  console.log(`Valor da gorjeta (10%): R$ ${valorGorjeta}`);
  console.log(`Valor total da conta: R$ ${totalConta}`);

  return totalConta;
}
calcularGorjeta(150);
