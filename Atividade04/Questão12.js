function fibonacciTermo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciTermo(n - 1) + fibonacciTermo(n - 2);
}
function fibonacciSequencia(numTermos) {
  let sequencia = [];
  for (let i = 0; i < numTermos; i++) {
    sequencia.push(fibonacciTermo(i));
  }
  return sequencia;
}
console.log(fibonacciSequencia(8));
