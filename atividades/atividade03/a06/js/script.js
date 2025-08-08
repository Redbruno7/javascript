function multiplicador(x) {
  return function(y) {
    return x * y;
  };
}

// Criar funções com base no multiplicador
let dobro = multiplicador(2);
let triplo = multiplicador(3);

// Testar
console.log("Dobro de 5 é:", dobro(5));
console.log("Triplo de 5 é:", triplo(5));
