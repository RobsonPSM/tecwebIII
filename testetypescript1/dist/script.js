"use strict";
let nome;
let botao;
let ul;
nome = document.getElementById("nome");
botao = document.getElementById("btnRegistro");
botao.addEventListener("click", function () {
    let li = document.createElement("li");
    li.textContent = nome.value;
    ul.appendChild(li);
});
ul = document.getElementById("conteudo");
