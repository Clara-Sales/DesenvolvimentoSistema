function classificarEstudante() {

    const idade = parseInt(prompt("Digite a idade:"));

  
    
    let classificacao;
    if (idade >= 0 && idade <= 3) {
      classificacao = "Bebê";
      
    } else if (idade >= 4 && idade <= 11) {
      classificacao = "Criança";
    }
     else if (idade >= 12 && idade <= 14) {
      classificacao = "Pré-adolescente";
    }
     else if (idade >= 15 && idade <= 17) {
      classificacao = "Adolescente";
    }
     else if (idade >= 18 && idade <= 64) {
      classificacao = "Adulto";
    }
     else if (idade > 64) {
      classificacao = "Idoso";
    }
    
    console.log(`Idade: ${idade} anos`);
    console.log(`Classificação: ${classificacao}`);
  }

  classificarEstudante();