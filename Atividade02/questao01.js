function verificarAprovacao() {

    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));
    const nota4 = parseFloat(prompt("Digite a quarta nota:"));
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    let situacao;
    if (media >=60) {
      situacao = "Aprovado";
    } else if (media >=40) {
      situacao = "Em Recuperação";
    } 

    if(media<40) {
      situacao = "Reprovado";
    }
  
 
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
  }
  

  verificarAprovacao();