let votos1 = 0;
let votos2 = 0;
let votos3 = 0;

let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));

for (let i = 1; i <= totalEleitores; i++) {
    let voto = prompt(
        `Eleitor ${i} - Vote em um candidato:\n1 - Candidato 1\n2 - Candidato 2\n3 - Candidato 3`
    );

    if (voto === "1") {
        votos1++;
    } else if (voto === "2") {
        votos2++;
    } else if (voto === "3") {
        votos3++;
    } else {
        alert("Voto inválido! Esse voto não será contabilizado.");
    }
}

let resultado = `RESULTADO FINAL:\n\n` +
    `Candidato 1: ${votos1} votos\n` +
    `Candidato 2: ${votos2} votos\n` +
    `Candidato 3: ${votos3} votos\n\n`;

if (votos1 > votos2 && votos1 > votos3) {
    resultado += "Candidato 1 foi o vencedor!";
} else if (votos2 > votos1 && votos2 > votos3) {
    resultado += "Candidato 2 foi o vencedor!";
} else if (votos3 > votos1 && votos3 > votos2) {
    resultado += "Candidato 3 foi o vencedor!";
} else {
    resultado += "Houve empate!";
}

alert(resultado);
