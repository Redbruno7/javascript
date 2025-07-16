let idade = prompt('Qual sua idade?');
let temSenha = prompt('Você tem a senha de acesso? (sim/não)');

// Conversão e limpeza de dados
idade = Number(idade);
temSenha = temSenha.toLowerCase();

// Verificação usando operadores de comparação e lógicos
if (idade >= 18 && temSenha === 'sim') {
    alert('Acesso permitido!');
} else if (idade <18 || temSenha === 'não') {
    alert('Acesso negado: idade insuficiente ou não possui senha.');
} else {
    alert('Dados inválidos. Tente novamente.');
}