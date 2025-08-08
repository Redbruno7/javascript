function executarOperacao(a, b, callback) {
  return callback(a, b);
}

// Definir operações
function soma(x, y) {
  return x + y;
}

function subtracao(x, y) {
  return x - y;
}

function multiplicacao(x, y) {
  return x * y;
}

// Testar operações
console.log("Soma (5 + 3):", executarOperacao(5, 3, soma));
console.log("Subtração (10 - 4):", executarOperacao(10, 4, subtracao));
console.log("Multiplicação (6 * 7):", executarOperacao(6, 7, multiplicacao));
