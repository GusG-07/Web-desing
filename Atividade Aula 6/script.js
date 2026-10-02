// ==========================================================
// QUANTUM LAB - SCRIPT.JS
// Interações simples utilizadas na página.
// ==========================================================


// ========================= MENU MOBILE =========================

// Captura o botão responsável por abrir o menu.
const botaoMenu = document.getElementById("botaoMenu");

// Captura o elemento nav que contém os links.
const menuPrincipal = document.getElementById("menuPrincipal");

// Verifica se o botão existe antes de adicionar o evento.
if (botaoMenu && menuPrincipal) {

    // Ao clicar, alterna a classe "aberto" no menu.
    botaoMenu.addEventListener("click", function () {
        menuPrincipal.classList.toggle("aberto");
    });

    // Fecha o menu depois que um link interno é selecionado.
    const linksMenu = menuPrincipal.querySelectorAll("a");

    linksMenu.forEach(function (link) {
        link.addEventListener("click", function () {
            menuPrincipal.classList.remove("aberto");
        });
    });
}


// ========================= SIMULADOR =========================

// Seleciona todos os botões de estado.
const botoesEstado = document.querySelectorAll(".botao-estado");

// Captura o círculo que representa o qubit.
const qubitGrande = document.getElementById("qubitGrande");

// Captura o texto interno do qubit.
const simboloQubit = document.getElementById("simboloQubit");

// Captura a descrição abaixo do qubit.
const descricaoEstado = document.getElementById("descricaoEstado");

// Função responsável por atualizar a demonstração.
function alterarEstado(estado) {

    // Remove a classe ativa de todos os botões.
    botoesEstado.forEach(function (botao) {
        botao.classList.remove("ativo");
    });

    // Procura o botão correspondente ao estado selecionado.
    const botaoSelecionado = document.querySelector(
        '[data-estado="' + estado + '"]'
    );

    // Adiciona a classe ativa quando o botão foi encontrado.
    if (botaoSelecionado) {
        botaoSelecionado.classList.add("ativo");
    }

    // Estado zero.
    if (estado === "0") {
        simboloQubit.textContent = "|0⟩";
        descricaoEstado.textContent =
            "O qubit está representado no estado |0⟩.";
        qubitGrande.style.transform = "scale(1)";
    }

    // Estado um.
    if (estado === "1") {
        simboloQubit.textContent = "|1⟩";
        descricaoEstado.textContent =
            "O qubit está representado no estado |1⟩.";
        qubitGrande.style.transform = "scale(1.08)";
    }

    // Demonstração visual da superposição.
    if (estado === "superposicao") {
        simboloQubit.textContent = "|ψ⟩";
        descricaoEstado.textContent =
            "Demonstração visual de uma superposição de estados.";
        qubitGrande.style.transform = "scale(1.15) rotate(5deg)";
    }
}


// Adiciona o evento de clique aos botões.
botoesEstado.forEach(function (botao) {

    botao.addEventListener("click", function () {

        // Lê o valor armazenado no atributo data-estado.
        const estado = botao.getAttribute("data-estado");

        // Atualiza a representação.
        alterarEstado(estado);
    });
});


// ========================= FORMULÁRIO =========================

// Captura o formulário.
const formulario = document.getElementById("formulario");

// Captura o local da mensagem.
const mensagemFormulario =
    document.getElementById("mensagemFormulario");

// Verifica se os elementos existem.
if (formulario && mensagemFormulario) {

    // Intercepta o envio do formulário.
    formulario.addEventListener("submit", function (evento) {

        // Evita o recarregamento da página.
        evento.preventDefault();

        // Lê o nome digitado.
        const nome = document.getElementById("nome").value.trim();

        // Verifica se existe conteúdo.
        if (nome !== "") {

            // Exibe uma mensagem de confirmação.
            mensagemFormulario.textContent =
                "Obrigado, " + nome + "! Você entrou na demonstração.";

            // Limpa o campo.
            formulario.reset();
        }
    });
}
