const path = require('path')
const currentFile = path.dirname(process.argv[1])

//Leitura das linhas do arquivo dev/stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\n');

//CÓDIGO PARA IR PARA BEECROWD

//Quebrando a entrada de dados em uma linha em váriaveis separadas;

//lines,shift - Ele remove o valor do arquivo stdin e importa para o código

//Utilizar essa opção de buscar de entrada caso os valores estiverem na mesma linha
//lines = lines[0].split(" ")

let [codigoPeca1, numeroPecas1, valorUnitario1] = lines[0].split(" ")
let [codigoPeca2, numeroPecas2, valorUnitario2] = lines[1].split(" ")

let total1 = numeroPecas1 * valorUnitario1
let total2 = numeroPecas2 * valorUnitario2

totalGeral = total1 + total2

console.log("VALOR A PAGAR: R$ " + totalGeral.toFixed(2))