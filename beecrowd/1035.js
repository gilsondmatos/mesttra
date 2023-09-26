var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores = lines[0].split (' ').map(Number)

function verificarValores (a,b,c,d) {
    if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 == 0){
        console.log('Valores nao aceitos')
    } else {
        console.log('Valores nao aceitos')
    }
}

verificarValores(5,6,7,4)

