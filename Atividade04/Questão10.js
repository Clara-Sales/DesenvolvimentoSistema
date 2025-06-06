function executarCallback(callback) {
  console.log("Iniciando execução do callback...");
  callback();
  console.log("Callback executado com sucesso!");
}
function dizerOla() {
  console.log("Olá do callback!");
}
executarCallback(dizerOla);
