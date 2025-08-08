async function buscarDadosDeAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.5;
      if (sucesso) {
        resolve({ dados: "Informações recebidas!" });
      } else {
        reject(new Error("Erro ao buscar dados da API."));
      }
    }, 1500);
  });
}

async function executarBusca() {
  try {
    const resultado = await buscarDadosDeAPI();
    console.log("Sucesso:", resultado.dados);
  } catch (erro) {
    console.error("Falha:", erro.message);
  }
}

executarBusca();
