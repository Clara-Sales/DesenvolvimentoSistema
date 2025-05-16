function menuMediaEstudante() {
    let opcao;
    do {
        opcao = prompt(
            "1.Média Aritmética Simples\n" +
            "2.Média Aritmética Ponderada\n" +
            "3.Sair"
        );

        switch (opcao) {
            case "1":
                calcularMediaSimples();
                break;
            case "2":
                calcularMediaPonderada();
                break;
            case "3":
                alert("Encerrando o programa...");
                break;
        }
    } 
}

function calcularMediaSimples() {
   let nota1= 5
   let nota2= 8

    const media = (nota1 + nota2) / 2;
    exibirResultado(media);
}

function calcularMediaPonderada() {
    let nota1= 5
    let peso1= 4
    let nota2= 8
    let peso2= 6

    const media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);
    exibirResultado(media);
}

function exibirResultado(media) {
    let status;

    if (media >= 60) {
        status = "Aprovado";
    } else if (media >= 40) {
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }
}
menuMediaEstudante();