function atenderCliente(cliente, callback) {
  console.log("Chamando próximo cliente...");
  setTimeout(() => {
    cliente();
    if (callback) {
      callback();
    }
  }, 3000); // delay de 5 segundos simulando atendimento
}

// Funções representando os clientes
function cliente1() {
  console.log("Cliente 1: Quero pagar um boleto.");
}

function cliente2() {
  console.log("Cliente 2: Preciso abrir uma conta.");
}

function cliente3() {
  console.log("Cliente 3: Gostaria de falar com o gerente.");
}

// Executar fila com callbacks para esperar o atendimento anterior terminar
atenderCliente(cliente1, () => {
  atenderCliente(cliente2, () => {
    atenderCliente(cliente3);
  });
});
