 function verificarEmprestimo(){
    let salario = 1500;
    let valorEmprestimo= 500;
    let limiteEmprestimo= salario * 0.20;

 if (valorEmprestimo > limiteEmprestimo) {
      console.log("Emprestimo não concedido.");
    } 
    else {
      console.log("Emprestimo pode ser concedido.");
    }
  }
  verificarEmprestimo();