const prompt = require('prompt-sync')();

var metragemFrente,
    metragemLateral,
    valorMetroTerreno,
    areaTerreno,
    valorTerreno;

function calcularAreaTerreno(metragemFrente, metragemLateral) {
    return metragemFrente * metragemLateral;
}

function calcularValorTerreno(areaTerreno, valorMetroTerreno) {
    return areaTerreno * valorMetroTerreno;
}

function formatarValorReais(valor) {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

function pulaLinha() {
    console.log("\n");
}

function main () {
    metragemFrente = parseFloat(prompt("Digite a metragem LATERAL do terreno: "));
    pulaLinha()
    metragemLateral = parseFloat(prompt("Digite a metragem FRENTE do terreno: "));
    pulaLinha()
    valorMetroTerreno = parseFloat(prompt("Digite o valor do m²: "));
    
    areaTerreno = calcularAreaTerreno(metragemFrente, metragemLateral);
    valorTerreno = calcularValorTerreno(areaTerreno, valorMetroTerreno);

    console.log("A Área total do terreno é: " + areaTerreno.toFixed(2));
    pulaLinha()
    console.log("O valor do terreno é: " + formatarValorReais(valorTerreno));
    pulaLinha()
}

main();