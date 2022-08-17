console.log("teste")

function sub(num:number, num2:number){
    console.log("hello")
    console.log(num+num2)
}

sub(2,4);

function carregar(nome:string, sobrenome?:string):string{
    return "Seu nome é " + nome;
}

let nombre:string = carregar("Robson")

console.log(nome)