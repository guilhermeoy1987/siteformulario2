document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const promocoes = document.getElementById("promocoes").checked;

        console.log("Dados cadastrados:");
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Telefone:", telefone);
        console.log("Aceita promoções:", promocoes ? "Sim" : "Não");

        alert("Cadastro enviado com sucesso!");
        form.reset();
    });
});
