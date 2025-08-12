// Lista de veículos disponíveis
let veiculos = [
    { id: 1, modelo: "Fiat Uno", disponivel: true },
    { id: 2, modelo: "Fiat Palio", disponivel: true },
    { id: 3, modelo: "Volkswagen Gol", disponivel: true },
    { id: 4, modelo: "Chevrolet Onix", disponivel: true },
    { id: 5, modelo: "Hyundai HB20", disponivel: true }
]

// Lista de locações
let locacoes = [];

// Listar veículos
function listarVeiculos() {
    console.log("=== Lista de Veículos ===");
    
    veiculos.forEach(v => {
        console.log(`${v.id} - ${v.modelo} | Disponível: ${v.disponivel ? "Sim" : "Não"}`);
    });
}

// Alugar veículo
function alugarVeiculo(id, cliente) {
    try {
        let veiculo = veiculos.find(v => v.id === id);

        if (!veiculo) {
            throw new Error("Veículo não encontrado.");
        }

        if (!veiculo.disponivel) {
            throw new Error("Veículo já está alugado.");
        }

        veiculo.disponivel = false;

        locacoes.push({ cliente, veiculo: veiculo.modelo });

        console.log(`Veículo "${veiculo.modelo}" alugado para ${cliente}.`);
    } catch (erro) {
        console.log("Erro:", erro.message);
    }
}

// Devolver veículo
function devolverVeiculo(id) {
    try {
        let veiculo = veiculos.find(v => v.id === id);

        if (!veiculo) {
            throw new Error("Veículo não encontrado.");
        }

        if (veiculo.disponivel) {
            throw new Error("Este veículo não está alugado.");
        }

        veiculo.disponivel = true;
        locacoes = locacoes.filter(l => l.veiculo !== veiculo.modelo);

        console.log(`Veículo "${veiculo.modelo}" devolvido.`);
    } catch (erro) {
        console.log("Erro:", erro.message);
    }
}

// Listar locações ativas
function listarLocacoes() {
    console.log("=== Locações Ativas ===");

    if (locacoes.length === 0) {
        console.log("Nenhuma locação registrada.");
    } else {
        locacoes.forEach((l, i) => {
            console.log(`${i + 1} - Cliente: ${l.cliente}`);
        })
    }
}

// Menu interativo
function menu() {
    while (true) {
        let opcao = prompt(
            "=== Controle de Locação ===\n" +
            "1. Listar veículos\n" +
            "2. Alugar veículo\n" +
            "3. Devolver veículo\n" +
            "4. Listar locações\n" +
            "5. Sair\n" +
            "Escolha uma opção (1-5):"
        );

        if (opcao === null || opcao === "5") {
            console.log("Sistema encerrado.");
            break;
        }

        switch (opcao) {
            case "1":
                listarVeiculos();
                break;
            
            case "2":
                let idAlugar = Number(prompt("Digite o ID do veículo para alugar:"));
                let cliente = prompt("Digite seu nome:");
                
                alugarVeiculo(idAlugar, cliente);
                break;

            case "3":
                let idDevolver = Number(prompt("Digite o ID do veículo para devolver:"));

                devolverVeiculo(idDevolver);
                break;

            case "4":
                listarLocacoes();
                break;

            default:
                console.log("Opção inválida.")
        }
    }
}

// Inicia o programa
menu()