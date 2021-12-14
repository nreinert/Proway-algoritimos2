/*

Solicite uma quantidade definida de numeros a serem capturados 
para cada captura deve verificar qual o maior numero e o menor numero 

após a capturados numeros exibir o maior o menor e a media geral desses numeros



*/
let quantidade = Number(prompt("Informe a quantidade de números"))
let menor
let maior
let media
let soma

soma = 0
for (let contador = 1; contador <= quantidade; contador++) {
    let numero = Number(prompt("Informe o " + contador + "a numero"))
    soma += numero
    if (contador == 1) {
        menor = numero
        maior = numero
    } else {

        if (numero < menor) {
            menor = numero


        if (numero > maior) {
                maior = numero
            }

        }

    }
    }   
     media = soma / quantidade
    alert("Menor " + menor)
    alert("Maior " + maior)
    alert("Média " + media)
