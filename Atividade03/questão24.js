const quantidade = parseInt(prompt("Quantas laranjas você deseja comprar?"));

    let precoUnidade;
    if (quantidade >= 12) {
        precoUnidade = 1.00;
    } else {
        precoUnidade = 1.30;
    }

    const total = quantidade * precoUnidade;

    
    console.log (`O custo total da compra é:${total}`);