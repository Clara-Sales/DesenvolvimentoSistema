
let matricula = prompt("Digite sua matrícula:");
let senha = prompt("Digite sua senha:");

if (matricula !== "201" || senha !== "123456789") {
    alert("Permissão negada");
} else {
    let opcao = prompt(
        "Selecione a unidade de tempo:\n1 - Horas\n2 - Minutos\n3 - Segundos"
    );

    let tempo;

    if (opcao === "1") {
        tempo = parseInt(prompt("Informe o tempo restante em horas:")) * 3600;
    } else if (opcao === "2") {
        tempo = parseInt(prompt("Informe o tempo restante em minutos:")) * 60;
    } else if (opcao === "3") {
        tempo = parseInt(prompt("Informe o tempo restante em segundos:"));
    } else {
        alert("Opção inválida.");
        throw new Error("Encerrando o programa.");
    }

    alert("Contagem iniciada. Tempo restante em segundos será exibido no console.");

    let contador = setInterval(() => {
        console.clear();
        console.log(`Tempo restante para a explosão: ${tempo} segundos`);

        if (tempo <= 0) {
            clearInterval(contador);
            console.log("Bomba detonada!");
            alert("Bomba detonada!");
        }

        tempo--;
    }, 1000);
}
