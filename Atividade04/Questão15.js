function saudacao(nome = "Visitante", mensagem = "Bem-vindo!") {
  return `${mensagem}, ${nome}!`;
}
console.log(saudacao());                        
console.log(saudacao("Maria", "Olá"));           
console.log(saudacao(undefined, "Saudações")); 
