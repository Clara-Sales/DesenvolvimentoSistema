function hora(numero){
    switch (numero) {
         case 1:
            if(numero>=5 && numero<=12){
                console.log("Turno matutino");
            }
      break;
    case 2:
      if(numero>=13 && numero<=19){
                console.log("Turno vespertino");
            }
      break;
    case 3:
      if(numero>=20 && numero<=24){
                console.log("Turno noturno");
            }
      break;
    default:
       console.log("Invalido");
    }
}
const turnos = parseInt(prompt("Digite o horário"));
hora(turnos);