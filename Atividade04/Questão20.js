function somaDigitosPrimos(numero) {const digitosPrimos = [2, 3, 5, 7];
  let soma = 0;
  const digitos = numero.toString().split('');
  for (let digito of digitos) {
    let num = parseInt(digito);
    if (digitosPrimos.includes(num)) {
      soma += num;
    }
  }

  return soma;
}
console.log(somaDigitosPrimos(2357));
console.log(somaDigitosPrimos(123456789));
console.log(somaDigitosPrimos(0));
