function processarPedido(produto, callback) {
  console.log(`Pedido recebido: ${produto}. Processando...`);

  // Simular atraso de 2 segundos (2000 ms)
  setTimeout(() => {
    callback(`O seu pedido de ${produto} está pronto!`);
  }, 2000);
}

// Exemplo de uso
processarPedido("Pizza", function(mensagem) {
  console.log(mensagem);
});
