const analisarNota = nota => {
  if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
};

// Testar notas
analisarNota(8);
analisarNota(6);
analisarNota(3);
