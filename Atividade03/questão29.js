function calcularCompra() {
    const produtos = {
        1: { nome: "Ovos (bandeja)", precoCompra: 15.00, lucro: 0.30, estoque: 5 },
        2: { nome: "Pães (8 unid.)", precoCompra: 5.00, lucro: 0.25, estoque: 9 },
        3: { nome: "Café (unidade)", precoCompra: 7.89, lucro: 0.45, estoque: 3 }
    };

    let codigo = parseInt(prompt(
        "1 - Ovos (bandeja)\n" +
        "2 - Pães (8 unid.)\n" +
        "3 - Café (unidade)"
    ));

    const produto = produtos[codigo];
    const precoVenda = produto.precoCompra * (1 + produto.lucro);
    const quantidade = 12

    if (quantidade > produto.estoque || quantidade <= 0 || isNaN(quantidade)) {
        alert("Quantidade inválida ou fora do estoque.");
        return;
    }

    const total = precoVenda * quantidade;

    alert(
        `Produto: ${produto.nome}\n` +
        `Preço de Venda: R$ ${precoVenda.toFixed(2)}\n` +
        `Quantidade: ${quantidade}\n` +
        `Total a pagar: R$ ${total.toFixed(2)}`
    );
}
calcularCompra();
