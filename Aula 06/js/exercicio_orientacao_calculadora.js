// criar uma classe calculadora com os atributos numeroA e numeroB
// criar metodos somar, subtrair,dividir,multiplicar,
// capturarNumeros e ele recebe por parametro o valor de A e B (com prompt)

// esses metodos serão chamados por botoes no html usando onclick="nomeDaFuncao()"


class Calculadora {
    numeroA
    numeroB

    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB

    }

    capturarNumeros(nA,nB,operacao) {
        this.numeroA = nA
        this.numeroB = nB
       

        switch(operacao){
            case "somar":
                return this.somar()
                break;
            case "subtrair":
                return this.subtrair()
                break;

        }
    }

    somar (){
        return this.numeroA+this.numeroB

    }

    subtrair (){
        return this.numeroA-this.numeroB

    }

}

let calculadora = new Calculadora(1,2)
console.log("A soma é "+calculadora.somar());
console.log("A subtração é "+calculadora.subtrair());
console.log("A operação de soma é "+ calculadora.capturarNumeros(5,3,"somar"));
console.log("A operação de subtrair é "+ calculadora.capturarNumeros(5,3,"subtrair"));

