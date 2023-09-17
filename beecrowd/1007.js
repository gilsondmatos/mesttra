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

let a
let b
let c
let d

a = parseInt(lines[0])
b = parseInt(lines[1])
c = parseInt(lines[2])
d = parseInt(lines[3])

diferenca = ((a * b) - (c * d))

console.log('DIFERENCA = ' + diferenca)