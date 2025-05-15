function pergunta() {
  const turno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.");

  if (turno == "M") {
    console.log("Bom Dia!");
  } else if (turno == "V") {
    console.log("Boa Tarde!");
  } else if (turno == "N") {
    console.log("Boa Noite!");
  } else {
    console.log("Valor Inválido!");
  }
}

pergunta();