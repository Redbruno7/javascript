let anoNascimento = Number(prompt('Insira seu ano de nascimento: '));
let anoCorrente = new Date().getFullYear();
let idade = anoCorrente - anoNascimento;

console.log('idade', idade);