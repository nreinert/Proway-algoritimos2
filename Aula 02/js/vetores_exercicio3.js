// criar um vetor vazio para solicitar do usuario frases aleatorias
// repetir essa captura até que o usuario digite ""
// para cade repetição em tela a frase aleatoria capturada


let frases 
let frase 

do{
    frase=prompt("Informe uma frase")


    document.write("<br>"+frase)
}while(frase != "")
