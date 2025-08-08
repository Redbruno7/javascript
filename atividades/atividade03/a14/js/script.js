// Forma tradicional
function soma(a, b) {
  return a + b;
}

function saudacao(nome) {
  return "Olá, " + nome + "!";
}

function dobro(n) {
  return n * 2;
}

// Testes
console.log("Tradicional - Soma:", soma(3, 4));
console.log("Tradicional - Saudação:", saudacao("Bruno"));
console.log("Tradicional - Dobro:", dobro(5));

// Forma arrow
const somaArrow = (a, b) => a + b;

const saudacaoArrow = nome => `Olá, ${nome}!`;

const dobroArrow = n => n * 2;

// Testes
console.log("Arrow - Soma:", somaArrow(3, 4));
console.log("Arrow - Saudação:", saudacaoArrow("Bruno"));
console.log("Arrow - Dobro:", dobroArrow(5));
