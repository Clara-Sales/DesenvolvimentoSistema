
let minutos = parseInt(prompt("Quantos minutos faltam para o réveillon?"));

let segundos = minutos * 60;

let contador = setInterval(() => {
    console.clear();
    console.log(`Tempo restante: ${segundos} segundos`);

    if (segundos <= 0) {
        clearInterval(contador);
        console.log("Feliz ano novo!");
        alert("Feliz ano novo!");
    }

    segundos -= 2;
}, 2000);
