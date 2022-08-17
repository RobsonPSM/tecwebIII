let nome: HTMLInputElement
let botao: HTMLButtonElement

nome = document.getElementById("nome") as HTMLInputElement

botao = document.getElementById("btnRegistro") as HTMLButtonElement

botao.addEventListener("click", function(){
    console.log("Login: " + nome.value)
})