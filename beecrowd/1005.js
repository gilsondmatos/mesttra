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
let peso1 = 3.5
let peso2 = 7.5

nota1 = parseFloat(lines[0])
nota2 = parseFloat(lines[1])

media = ((nota1*peso1) + (nota2*peso2))/11

console.log('MÉDIA = ' + media.toFixed(5))