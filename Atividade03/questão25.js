function verificarVoto() {
    let anoAtual = 2025
    const anoNascimento = parseInt(prompt("Informe seu ano de nascimento:"));
    let idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        alert(`Você tem ${idade} anos, então você poderá votar este ano.`);
    } else {
        alert(`Você tem ${idade} anos, então não poderá pode votar este ano.`);
    }
}

verificarVoto();
