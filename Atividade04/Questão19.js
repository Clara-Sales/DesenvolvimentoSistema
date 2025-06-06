function converterBRLparaUSD(valorBRL, taxaCambio) {
  return valorBRL * taxaCambio;
}
const valorEmReais = 100;
const taxaDeCambio = 0.20; 
const valorEmDolares = converterBRLparaUSD(valorEmReais, taxaDeCambio);
console.log(`R$ ${valorEmReais.toFixed(2)} equivalem a US$ ${valorEmDolares.toFixed(2)}`);
