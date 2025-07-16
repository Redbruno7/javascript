// Entrada de dados via popup
var entrada = prompt("Digite seu nome de usuário:");

// 1 - Remove espaços do início e fim
var nome = entrada.trim();

// 2 - Verifica se está vazio
if (nome.length === 0) {
    console.log("Erro: o nome está vazio.");
} else {
    // 3 - Converte para letras maiúsculas
    nome = nome.toUpperCase();

    // 4 - Verifica se o nome tem pelo menos 4 caracteres
    if (nome.length < 4) {
        console.log("Erro: o nome precisa ter pelo menos 4 letras.");
    }
    // 5 - Verifica se contém '@'
    else if (nome.includes("@")) {
        console.log("Erro: o nome não pode conter o símbolo '@'.");
    } else {
        // 6 - Remove acentos
        nome = nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // 7 - Substitui espaços por hífens
        nome = nome.replace(" ", "-");

        // Resultado final no console
        console.log("Nome de usuário gerado:", nome);
    }
}
