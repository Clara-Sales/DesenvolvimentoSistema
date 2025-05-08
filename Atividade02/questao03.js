function verificar() {

    const salarioBruto = parseFloat(prompt("Digite o valor do salário bruto:"));
    let alíquota;
    if (salarioBruto <= 1000) {
      alíquota = 7;
    }
     else if (salarioBruto <= 2500) {
      alíquota = 14;
    }
     else if (salarioBruto <= 3500) {
      alíquota = 21;
    }
     else if (salarioBruto <= 9000) {
      alíquota = 27.5;
    }
     else {
      alíquota = 32.5;
    }
  
    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Alíquota do Imposto de Renda: ${alíquota}%`);
  }
  verificar();