function formatarData(dia, mes, ano) {

  // Garantir que dia e mês tenham dois dígitos
  const diaFormatado = dia.toString().padStart(2, "0");
  const mesFormatado = mes.toString().padStart(2, "0");
  return `${diaFormatado}/${mesFormatado}/${ano}`;
}

// Testar
console.log(formatarData(8, 8, 2025));
console.log(formatarData(1, 1, 2000));
