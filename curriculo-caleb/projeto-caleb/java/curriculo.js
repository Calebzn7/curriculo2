const nome = document.querySelector("#nome");
const botaoeditar = document.querySelector("#editar");
const botaosair = document.querySelector("#sair");

botaoeditar.addEventListener("click", function() { 
    const novoNome = prompt("Digite seu nome:");
    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }
    const novacidade = prompt("Digite sua cidade:");
    if (novacidade !== null && novacidade.trim() !== "") {
        cidade.textContent = novacidade.trim();
        document.querySelector(".curriculo p:nth-of-type(3)").textContent = "cidade:" + novacidade.trim();
    }

    
});

botaosair.addEventListener("click", function() {
    const resposta = confirm("Deseja sair do perfil?");
    
    if (resposta) {
        alert("Você saiu do perfil!");
        window.location.href = "about:blank";
    }
});