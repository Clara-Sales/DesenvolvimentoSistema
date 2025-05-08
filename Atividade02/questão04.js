function verificarOEmprestimo() {
    
    const salario = parseFloat(prompt("Digite o valor do seu salário:"));
    const valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo desejado:"));
    const limiteEmprestimo = salario * 0.20;
  
    if (valorEmprestimo > limiteEmprestimo) {
      console.log("Empréstimo não concedido: O valor do empréstimo excede 20% do seu salário.");
    } 
    else {
      console.log("Empréstimo pode ser concedido.");
    }
    console.log(`Salário: R$ ${salario.toFixed(2)}`);
    console.log(`Valor do Empréstimo Solicitado: R$ ${valorEmprestimo.toFixed(2)}`);
    console.log(`Limite de 20% do Salário para Empréstimo: R$ ${limiteEmprestimo.toFixed(2)}`);
  }
  verificarOEmprestimo();