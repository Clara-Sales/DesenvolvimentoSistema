function calcularFatorial(n) {
  if (n === 0) return 1;

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function solicitarNumero() {
  let numero;
  let valido = false;

  while (!valido) {
    let entrada = prompt("Digite um número inteiro positivo (ou zero):");

    numero = Number(entrada);

    if (Number.isInteger(numero) && numero >= 0) {
      valido = true;
    } else {
      alert("Erro: Digite apenas números inteiros positivos ou zero.");
    }
  }

  return numero;
}
const numero = solicitarNumero();
const fatorial = calcularFatorial(numero);