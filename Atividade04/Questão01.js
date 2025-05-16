function receberNumero() {
    const n1 = parseFloat(prompt("Informe o primeiro numero:"));
    const n2 = parseFloat(prompt("Informe o segundo numero:"));
    const soma = n1 + n2;
    if(n1 < 0 || n2 < 0){
        console.log(`Valor invalido`);
    }
    else{
        console.log(`A soma de ${n1} e ${n2} é: ${soma}`);
    }
}
receberNumero();
