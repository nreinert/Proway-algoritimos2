console.log("Olá");


meApresentar()  //chamada de função


let nome = capturaTexto("Informe seu nome") //usando a função captura texto passando texto passando o parametro "frase"
let idade = capturaNumeroEspecial("Informe sua idade")
let anoAtual = capturaNumeroEspecial("Informe o ano atual")
let cidade = capturaTexto ("Informe sua cidade")

console.log("Meu nome é "+ nome +" minha idade é "+ idade +" estamos no ano de "+ anoAtual+ " estou em "+cidade);

console.log("Quero saber o retorno dessa função " + retorneInteiro());


//declaração da função
//tem palavra reservada function
//tem nome da função
//() gaveta de parametros 
//{} escopo tudo que será executado
//conteudo que eu quero executar
function meApresentar() {

    let nome = "nathalia"
    let idade = 21

    console.log("Oi meu nome " + nome + " tenho " + idade + " anos")


}


function retornoSimples() {
    return "ta aqui oq vc precisa"


}

function retorneInteiro() {
    return 14


}

//quando eu chamo essa função devo informar um valor para esse parametro
function capturaTexto(texto) {
    let temporario = prompt(texto)
    return temporario

}

//não precisa passar parametros pois não tem
function capturaNumero() {
    let temporario = Number(prompt("Informe um numero"))
    return temporario


}

//essa função recebe parametro onde a função capturaNumero não recebia
//dessa forma a função se torna dinamica pois é parametrizavel
function capturaNumeroEspecial(frase){
    let temporario = Number (prompt(frase))
    return temporario

}

