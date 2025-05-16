function contarVogais(){
    function contarVogais(str) {
        const vogais = "aeiouAEIOU";
        let contador = 0;

        for (let i = 0; i < str.length; i++) {
            if (vogais.indexOf(str[i]) !== -1) {
            contador++;
            }
        }

        return contador;
    }
}
