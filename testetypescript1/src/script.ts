let nome: HTMLInputElement
let botao: HTMLButtonElement
let ul: HTMLUListElement

nome = document.getElementById("nome") as HTMLInputElement

botao = document.getElementById("btnRegistro") as HTMLButtonElement

botao.addEventListener("click", function(){
    let li = document.createElement("li");
    li.textContent = nome.value;
    ul.appendChild(li);

})

ul = document.getElementById("conteudo") as HTMLUListElement
