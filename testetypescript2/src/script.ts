let email: HTMLInputElement
let nome: HTMLInputElement
let senha: HTMLInputElement
let csenha: HTMLInputElement
let botao: HTMLButtonElement

senha = document.querySelector("#exampleInputPassword1") as HTMLInputElement;
csenha = document.querySelector("#exampleInputPassword2") as HTMLInputElement;
botao = document.getElementById("btnRegistro") as HTMLButtonElement

botao.addEventListener("click", function(){
    if(senha.value == csenha.value){
    email = document.querySelector("#exampleInputEmail1") as HTMLInputElement;
    nome = document.querySelector("#exampleInputName") as HTMLInputElement;
    } else{
        window.alert("As senhas não estão iguais");
    }
})
