// Seleciona os elementos do DOM
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*+0123456789";

// Atualiza o valor do tamanho da senha exibido conforme o valor do slider
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

// Função para gerar a senha
function generatePassword() {
    let pass = "";
    for (let i = 0; i < sliderElement.value; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        pass += charset.charAt(randomIndex);
    }
    passwordElement.innerHTML = pass;
    containerPassword.classList.remove("hide"); // Mostra o contêiner da senha gerada
}

// Adiciona um ouvinte de evento ao botão para chamar a função generatePassword quando clicado
buttonElement.addEventListener("click", generatePassword);
