let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*+0123456789";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0; i < sliderElement.value; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        pass += charset.charAt(randomIndex);
    }
    passwordElement.innerHTML = pass;
    containerPassword.classList.remove("hide");
}

buttonElement.addEventListener("click", generatePassword);
