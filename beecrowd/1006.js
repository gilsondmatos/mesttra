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

let nota1
let nota2
let nota3
const peso1 = 2
const peso2 = 3
const peso3 = 5

somaPesos = peso1 + peso2 + peso3

nota1 = parseFloat(lines[0])
nota2 = parseFloat(lines[1])
nota3 = parseFloat(lines[2])

media = ((nota1 * peso1)+(nota2 * peso2)+(nota3 * peso3))/somaPesos

console.log('MEDIA = ' + media.toFixed(1))

