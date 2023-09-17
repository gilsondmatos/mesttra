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

let vendedor
let salarioFixo
let totalVendasMes
const comissao = 0.15

vendedor = lines[0]
salarioFixo = parseFloat(lines[1])
totalVendasMes = parseFloat(lines[2])

valorDaComissao = totalVendasMes * comissao
valorTotal = salarioFixo + valorDaComissao

console.log('TOTAL = R$ ' + valorTotal.toFixed(2))