"use strict";
let email;
let nome;
let senha;
let csenha;
let botao;
senha = document.querySelector("#exampleInputPassword1");
csenha = document.querySelector("#exampleInputPassword2");
botao = document.getElementById("btnRegistro");
botao.addEventListener("click", function () {
    if (senha.value == csenha.value) {
        email = document.querySelector("#exampleInputEmail1");
        nome = document.querySelector("#exampleInputName");
    }
    else {
        window.alert("As senhas não estão iguais");
    }
});
