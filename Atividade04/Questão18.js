function calcularFrete(peso) {
  const valorPorQuilo = 2.89;
  const valorFrete = peso * valorPorQuilo;
  return valorFrete;
}
let pesoEncomenda = 5;
let frete = calcularFrete(pesoEncomenda);
console.log(`O valor do frete para ${pesoEncomenda} kg é R$ ${frete}`);
