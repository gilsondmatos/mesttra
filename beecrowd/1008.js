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

let nFuncionario
let horasTrabalhadas
let valorHora

nFuncionario = parseInt(lines[0])
horasTrabalhadas = parseInt(lines[1])
valorHora = parseFloat(lines[2])

valorSalario = horasTrabalhadas * valorHora

console.log('NUMBER = ' + nFuncionario)
console.log('SALARY = U$ ' + valorSalario.toFixed(2))
