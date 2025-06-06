// Solicita a quantidade de notas
let qtdNotas = parseInt(prompt("Quantas notas deseja informar?"));

let somaNotasPonderadas = 0;
let somaPesos = 0;

// Loop para coletar notas e pesos
for (let i = 1; i <= qtdNotas; i++) {
    let nota = parseFloat(prompt(`Informe a nota ${i}:`));
    let peso = parseFloat(prompt(`Informe o peso da nota ${i}:`));

    somaNotasPonderadas += nota * peso;
    somaPesos += peso;
}

// Calcula a média ponderada
let media = somaNotasPonderadas / somaPesos;

// Verifica a situação do estudante
let situacao = "";

if (media >= 60) {
    situacao = "Estudante apto.";
} else if (media >= 40) {
    situacao = "Estudante em recuperação.";
} else {
    situacao = "Estudante reprovado.";
}

// Exibe o resultado
alert(`Média ponderada: ${media.toFixed(2)}\nSituação: ${situacao}`);
