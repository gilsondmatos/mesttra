const path = require('path')
const currentFile = path.dirname(process.argv[1])

//Leitura das linhas do arquivo dev/stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\n');

let totalEmDias = parseInt(lines[0])

function converterDias(dias, tipo) {
    let conversao = {
        ano: 365,
        mes: 30,
        dia: 1
    }
    let quantidade = Math.floor(dias / conversao[tipo])
    let restoDias = dias % conversao[tipo]
    return {quantidade, restoDias}
}

function formatarDias(dias) {
    let anos = converterDias(dias, 'ano')
    let meses = converterDias(anos.restoDias, 'mes')

    return `${anos.quantidade + " ano(s)\n"}${meses.quantidade + " mes(es)\n"}${meses.restoDias + " dia(s)"}`
}

console.log(formatarDias(totalEmDias))