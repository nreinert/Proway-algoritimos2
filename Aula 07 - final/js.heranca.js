

// a classe Pessoa agrega tudo que foi identificado como COMUM entre as classes Aluno,Professor...
class Pessoa {
    //esses atributos não precisam mais ser declarados em cada classe que herde de Pessoa
    nome
    idade
    altura
    salario
    //basta repassar os parametros que vem no NEW para o constructor da SUPER CLASS
    constructor(nome,idade,altura,salario){
        this.nome = nome
        this.idade = idade 
        this.altura=altura
        this.salario-salario

    }

}

//o comando extends + nome da classe, garante a herança de atributos e metodos da SUPER CLASSE
class Diretor extends Pessoa {
    //esse atributo só existe na classe Diretor
    //não preciso informar nome e idade novamente aqui
    qtdProfessores 


//o constructor tem o objetivo de preencher os valores antes de gerar um objeto do tipo Diretor
//por isso preciso informar nome e idade no NEW porém devo repassar esses valores para o constructor
//da super classe ou CLASSE PAI 
    constructor(nome,idade,qtdProfessores){
        super(nome,idade)
        this.qtdProfessores=qtdProfessores
        //os atributos herdados repasso para o constructor da SUPER CLASSE
        

    }




}


class Aluno extends Pessoa {
    //atributos da classe Aluno
    //nome 
    //idade
    matricula 

    // Constructor utilizado no new que recebe os parametros para inicializar
    // os atributos no novo objeto do tipo Aluno

    constructor(nome,idade,matricula){
    
        // para cada parametro inicializando respectivamente o atributo do objeto
        // o (this) é utilizado para identificar que o atributo é do objeto
        // isso ajuda a não confundir parametro com atributo
        //this.nome=nome
       // this.idade=idade
       super(nome,idade)
        this.matricula=matricula

    }
    
    meApresentar(){
        return "Olá meu nome é "+this.nome+" tenho "+this.idade+" anos, e minha matricula é "+this.matricula

    }

}

 //professor
//nome,idade,qtdAlunos
//meApresentar()

class Professor extends Pessoa {
    //nome 
   // idade
    qtdAlunos
  

    constructor(nome,idade,qtdAlunos,){
   
        //this.nome=nome
        //this.idade=idade
        //o super deve ser chamado primeiro para garantir que a SUPER CLASSE faça o seu constructor primeirp
        super(nome,idade)
        //depois inicializo meus atributos especificos da classe Professor
        this.qtdAlunos=qtdAlunos

    }
    
    meApresentar(){
        return "Olá meu nome é "+this.nome+" tenho "+this.idade+" anos, e eu tenho "+this.qtdAlunos+" alunos"

    }

}

let prof1 = new Professor ("Rubem",32,15,1,5,15)

console.log(prof1);
console.log(prof1.nome);  // para verificar somente o nome e etc... 
console.log(prof1.idade);

let paulo = new Diretor ("Paulo Y Kano",80,30)
paulo.altura=1.75
paulo.salario=3000

console.log(paulo);

