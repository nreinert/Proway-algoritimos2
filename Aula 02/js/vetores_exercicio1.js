// Criar um vetor de gostos pessoais
// pode criar o vetor ja com valores ou não
// se  não tiver valores usar o push para incluir
// item a item
// exibir a lista toda com LOG
//Percorrer a lista para apresentar cada valor
// com uma frase 


// criei um vetor de gostos
let gostos=[
    "filmes", 
    "series",
    "basquete",
]

// usando o push inclui um item na lista
gostos.push("lecionar")


//exibi um log como esta a variavel gostos
console.log(gostos);


// percorrendo o vetor de 0 ate tamanho da lista -1
// de 1 em 1

for (let contador=0;contador<gostos.length;contador++){

// acessando o valor que esta na posição [contador]
console.log("gosto muito de "+gostos[contador]);
} 

console.log(gostos[0]);
console.log("O que eu gosto mais é "+ gostos[2]);

