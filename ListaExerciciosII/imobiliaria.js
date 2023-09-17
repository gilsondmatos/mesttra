/* Faça um algoritmo para imprimir a área do terreno e o valor de venda do mesmo. Para isto será necessário o usuário informar as dimensões em metros (frente e lateral) do terreno além do valor cobrado pelo metro quadrado. 

Caso a diferença de metragem entre a frente e a lateral seja menor que 10% da metragem da frente, o cliente terá um acréscimo de 22% no valor final do terreno. 

Caso a metragem da frente for menor que 40% da lateral, o cliente terá um desconto de 12% no valor final do terreno. 

Caso a metragem da frente for maior que 70% da lateral, o cliente terá um desconto de 15%. 

Caso as medidas não encaixem em nenhuma das regras o valor final do terreno não sofrerá alterações.

*/

var prompt = require('prompt-sync')();

let frente, lateral, valorMetroQuadrado;


frente = parseFloat(prompt("Digite o valor em Metros da FRENTE do terreno: "));
lateral = parseFloat(prompt("Digite o valor em Metros da LATERAL do terreno: "));
valorMetroQuadrado = parseFloat(prompt("Informe o valor do metro quadrado: "));

function calcularValorTerreno (frente, lateral, valorMetroQuadrado) {
    const areaTerreno = lateral * frente;
    let valorTotal = areaTerreno * valorMetroQuadrado;

    const diferencaPercentual = Math.abs(frente - lateral) / frente * 100;

    if (diferencaPercentual < 10) {
        valorTotal *= 1.22;
    } else if (frente < 0.4 * lateral) {
        valorTotal *= 0.88;
    }else if (frente > 0.7 * lateral) {
        valorTotal *= 0.85;
    }
    
    console.log("Área do terreno: " + areaTerreno.toFixed(2) + " metros quadrados");
    console.log("Diferença percentual entre frente e lateral: " + diferencaPercentual.toFixed(2) + "%");
    console.log("Valor de venda do terreno: R$" + valorTotal.toFixed(2));

    }

    calcularValorTerreno(frente, lateral, valorMetroQuadrado);




