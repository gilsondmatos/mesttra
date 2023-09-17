const prompt = require('prompt-sync')();

var numero;
var resultado;

function calculadoraSoma() {
     for (let i = 0; i <11; i++){
        let resultado = numero + i;
        console.log(`${numero} + ${i} = ${resultado}`);
     }
}

function calculadoraSubtracao() {
    for(let i = 0; i < 11; i++) {
        let resultado = numero - i;
        console.log(`${numero} - ${i} = ${resultado}`);
    }
}

function calculadoraMultiplicacao () {
    for(let i = 0; i < 10; i++){
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`  )
    }
}

function calculadoraDivisao () {
    for(i = 0; i < 11; i++) {
        let resultado = numero / i;
        console.log(`${numero} / ${i} = ${resultado.toFixed(2)}`);
    }
}

    function pulaLinha() {
        console.log("\n");
    }
    

function main() {
    
    numero = parseFloat(prompt("Informe o número para o cálculo da tabuada: "));

    
    console.log(`Tabuada do +  e - para o número ${numero}`);
    calculadoraSoma();
    pulaLinha();
    calculadoraSubtracao();
    pulaLinha();
    console.log(`Tabuada da *  e / para o ${numero}`);
    calculadoraMultiplicacao();
    pulaLinha();
    calculadoraDivisao();
   

}

main();
