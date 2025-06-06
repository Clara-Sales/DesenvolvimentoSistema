let base = parseInt(prompt("Digite a base (número inteiro):"));
let expoente = parseInt(prompt("Digite o expoente (número inteiro):"));

function potencia(base, expoente) {
    let resultado = 1;
    let positivo = Math.abs(expoente);

    for (let i = 0; i < positivo; i++) {
        resultado *= base;
    }
    if (expoente < 0) {
        return 1 / resultado;
    }

    return resultado;
}

let resultado = potencia(base, expoente);
console.log(`${base} elevado a ${expoente} é: ${resultado}`);
alert(`${base} elevado a ${expoente} é: ${resultado}`);
