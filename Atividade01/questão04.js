function verificarOEmprestimo() {
    
    const salario = parseFloat(prompt("Digite o valor do seu salário:"));
    const valorEmprestimo = parseFloat(prompt("Digite o valor do emprestimo:"));
    const limiteEmprestimo = salario * 0.20;
  
    if (valorEmprestimo > limiteEmprestimo) {
      console.log("Emprestimo não concedido, empréstimo excede 20% do seu salário.");
    } 
    else {
      console.log("Emprestimo pode ser concedido.");
    }
    console.log(`Salário: R$ ${salario.toFixed(2)}`);
    console.log(`Valor do emprestimo solicitado: R$ ${valorEmprestimo.toFixed(2)}`);
    console.log(`Limite de 20% do salário para realizar o emprestimo: R$ ${limiteEmprestimo.toFixed(2)}`);
  }
  verificarOEmprestimo();