function executarTarefas(func1, func2) {
  func1();
  func2();
}

// Definir funções
function mostrarHora() {
  let agora = new Date();
  console.log("Hora atual:", agora.toLocaleTimeString());
}

function mostrarData() {
  let hoje = new Date();
  console.log("Data atual:", hoje.toLocaleDateString());
}

// Executar tarefas
executarTarefas(mostrarHora, mostrarData);