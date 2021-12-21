//criar uma classe professor com os atributos
//nome string
//idade number
//qtdAlunos numer

//metodos 
//fazerChamada que recebe por parametro o nome do aluno e retorna (presença verificada)
//calculaMedia recebe 3 notas e devolve a media 


//após criar a classe instanciar 1 objeto da classe Professor para atribuir os valores
//atualizar algum valor de atributo do professor
//utilizar os metodos do Professor

class Professor {
    nome
    idade
    qtdAlunos
    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos

    }

    fazerChamada(nomeAluno) {
        return "Presença verificada " + nomeAluno + " marcado na lista"

    }

calcularMedia(nota1,nota2,nota3){
    return (nota1 + nota2 + nota3) / 3 

    }

}

let professor1= new Professor ("Aluno",60,30)
professor1.qtdAlunos=20


console.log(professor1.fazerChamada(" Ciclaninho"));

let media = professor1.calcularMedia (5,7,10)

console.log(media);

// instanciem outro professor e utilizem seus atributos e metodos 
// ler valores separadamente
// atualizar valores e ver o ANTES e DEPOIS
// fazer mais de uma CHAMADA
// calcular mais de uma MEDIA 


let professor2= new Professor ("Aluno de mestrado",30,25)
console.log(professor2.nome);
console.log(professor2.idade);
console.log("qtd ANTES " +professor2.qtdAlunos);

professor2.qtdAlunos=35 
console.log("qtd DEPOIS "+ professor2.qtdAlunos);


console.log(professor2.fazerChamada("fulaninho"));
console.log(professor2.fazerChamada("outro cara ai"));

console.log(professor2.calcularMedia (7,7,7));
console.log(professor2.calcularMedia(2,7,10));
