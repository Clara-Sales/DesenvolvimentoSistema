function ehPar() {
  const n1 = parseFloat(prompt("Informe um numero:"));
  if (n1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const numeroInformado = ehPar();
console.log(numeroInformado);