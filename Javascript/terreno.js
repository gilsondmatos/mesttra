const prompt = require('prompt-sync')();

var metragemFrente,
    metragemLateral,
    valorMetroTerreno,
    AreaTerreno,
    valorTerreno;


metragemFrente = prompt("Digite quantos metros tem o terreno FRENTE: ");
metragemLateral = prompt("Digite quantos metros tem o terreno LATERAL: ");
valorMetroTerreno = prompt("Informe o valor do m² R$: ");

// Calculo da area do terreno
AreaTerreno = (metragemFrente * metragemLateral);

//Calculo do valor do terreno em Reais
valorTerreno = (AreaTerreno * valorMetroTerreno);


console.log("A área total do terreno é: " + AreaTerreno.toFixed(2));
console.log("O valor do terreno é: " + valorTerreno.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
