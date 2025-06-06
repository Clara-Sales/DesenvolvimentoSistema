function contarVogais(texto) {
  let vogais = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.indexOf(texto[i]) !== -1) {
      contador++;
    }
  }

  return contador;
}
console.log(contarVogais("Programação"));        


