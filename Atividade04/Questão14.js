function somaVariavel(variavel) {
  let soma = 0;
  for (let numero of variavel) {
    soma += numero;
  }
  return soma;
}
console.log(somaVariavel(1, 2, 3));
