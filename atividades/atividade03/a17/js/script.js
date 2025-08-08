function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Testar valores
console.log("IMC (70kg, 1.75m):", calcularIMC(70, 1.75).toFixed(2));
console.log("IMC (90kg, 1.70m):", calcularIMC(90, 1.70).toFixed(2));
