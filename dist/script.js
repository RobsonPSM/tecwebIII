"use strict";
let nome;
let botao;
nome = document.getElementById("nome");
botao = document.getElementById("btnRegistro");
botao.addEventListener("click", function () {
    console.log("Login: " + nome.value);
});
