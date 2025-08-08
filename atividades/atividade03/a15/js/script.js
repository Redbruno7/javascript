// Simular consulta com delay
async function buscarUsuario() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ nome: "Bruno", idade: 25 });
    }, 2000); // 2 segundos de "consulta"
  });
}

// Chamar a consulta e exibir o resultado
async function exibirUsuario() {
  console.log("Buscando usuário...");
  const usuario = await buscarUsuario();
  console.log("Usuário encontrado:");
  console.log("Nome:", usuario.nome);
  console.log("Idade:", usuario.idade);
}

// Teste
exibirUsuario();