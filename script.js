
const formulario = document.getElementById("form-orcamento");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const moto = document.getElementById("moto").value;
    const ano = document.getElementById("ano").value;
    const servico = document.getElementById("servico").value;
    const problema = document.getElementById("problema").value;

    const mensagem = `Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}
Moto: ${moto}
Ano: ${ano}
Serviço: ${servico}
Descrição: ${problema}`;

    const telefone = "5551981527052";

    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});
function abrirMenu() {
    const menu = document.getElementById("menu");

    if (getComputedStyle(menu).display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}