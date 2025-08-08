function coletarDados(callback) {
  console.log("Coletando dados...");
  setTimeout(() => {
    const dados = { nome: "Bruno", idade: 26 };
    console.log("Dados coletados.");
    callback(dados);
  }, 2000);
}

function processarDados(dados, callback) {
  console.log("Processando dados...");
  setTimeout(() => {
    dados.processado = true;
    console.log("Dados processados.");
    callback(dados);
  }, 2000);
}

function exibirDados(dados) {
  console.log("Dados finais:");
  console.log(dados);
}

// Executar encadeamento
coletarDados(function (dadosColetados) {
  processarDados(dadosColetados, function (dadosProcessados) {
    exibirDados(dadosProcessados);
  });
});
