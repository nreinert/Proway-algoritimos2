
let nome="Nathalia Reinert" // variavel do tipo sting
let idade=21                // variavel do tipo number
let distanciapProway=0.3    //variavel do tipo number

console.log("Olá meu nome é",nome," e tenho",idade," anos e moro a ",distanciapProway," km de distancia daqui");

//let bairro = prompt("Informe o seu bairro")

//alert(bairro)

if(idade>=18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é de menor");
}
if(idade<15){
    console.log("Você não pode entrar");
}else
    console.log("Você pode entrar");

console.log("Escolha uma opção")
console.log("1 - Primavera")
console.log("2 - Verão")
console.log("3 - Outono")
console.log("4 - Inverno")
let opcao=2

   
    switch(opcao) {
        case 1:
            console.log("Você escolheu a primavera");
            break
        case 2:
            console.log("Você escolheu verão");
            break
        case 3:
            console.log("Você escolheu Outono");
            break
        case 4:
            console.log("Você escolheu Inverno");
            break

        default:
            console.log("Essa opção não é válida");
            break
    }

let quantidade=16
 
for(let contador = 1; contador<=quantidade;contador++ ){
    console.log("Repetindo pela ",contador,"x");
}

for (let variavel=1; variavel<=5; variavel++){
    console.log("repetindo de novo pela ",variavel," a x");
}

//let resposta
//do{
//resposta = prompt ("Tinham 2 dogs, pita e repita, pita morreu quem ficou?")

//}while(resposta="repita");










