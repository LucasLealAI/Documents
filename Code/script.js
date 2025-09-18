let titulo = document.getElementById('titulo').innerHTML;
console.log(titulo);

document.getElementById('nome').innerHTML="Fagner";

//    let nome = prompt("Qual é o seu nome?");
//    let idade = prompt("Qual é a sua idade?");
//    let ano = prompt("Qual o ano atual?");

//    let nasc = ano - idade;
//    let resposta = "Olá " + nome + ", o seu ano de nascimento é " + nasc;

//  document.getElementById("resposta_e1").innerHTML = resposta;

function exibeMensagem(){
    console.log("Exemplo de messagem")
}

function exibeMensagemComParametro(texto){
    console.log(texto)
}

exibeMensagem()
exibeMensagem()
exibeMensagem()
exibeMensagemComParametro("texto 1")
exibeMensagemComParametro("texto 2")
exibeMensagemComParametro("texto 3")

function soma(a, b){
    let c = a + b;
    return c
}

function subt(a, b){
    let c = a - b;
    return c
}

function mult(a, b){
    let c = a * b;
    return c
}

    console.log("A soma de " + 2 + " mais " + 3 + " é igual a " + soma(2,3));
    console.log("A soma de " + 7 + " mais " + 9 + " é igual a " + soma(2,3));
    console.log("A soma de " + 6 + " mais " + 7 + " é igual a " + soma(2,3));

    function imprimeTexto(){
        let texto = document.getElementById("in_text").value;
        console.log(texto)
    }

    function imprimeIncrementos(){
        let x = parseInt (document.getElementById("exercicio2").value)

        document.getElementById("resposta_e2").innerHTML = "";
        for (let i = 0; i < x; i++){
            console.log(i)
            let resposta = document.getElementById("resposta_e2").innerHTML + " " + i
            document.getElementById("resposta_e2").innerHTML = resposta;
        }
    }

    function soma2(){
        let a = parseInt(document.getElementById("exercicio3/1").value);
        let b = parseInt(document.getElementById("exercicio3/2").value);

        let c = soma(a, b);

        document.getElementById("resposta_e3").innerHTML = c
    }

    function imprimeCalculo(){
        let a = parseInt(document.getElementById("exercicio4/1").value);
        let b = parseInt(document.getElementById("exercicio4/2").value);

        let c = 0
        if(a < 0 || b < 0){
            c = soma(a, b);
        } else {
            c = mult(a, b);
        }

        document.getElementById("resposta_e4").innerHTML = c
    }