const path = require('path')
const currentFile = path.dirname(process.argv[1])

//Leitura das linhas do arquivo dev/stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\n');

let totalSegundos = parseInt(lines[0])

function converterSegundos(segundos, tipo) {
    let conversao = {
        hora: 3600,
        minuto: 60,
        segundo: 1
    }
    let quantidade = Math.floor(segundos / conversao[tipo])
    let restoSegundos = segundos % conversao[tipo]
    return {quantidade, restoSegundos}
}

function formatarHoras(segundos) {
    let horas = converterSegundos(segundos, 'hora')
    let minutos = converterSegundos(horas.restoSegundos, 'minuto')

    return `${horas.quantidade}:${minutos.quantidade}:${minutos.restoSegundos}`

}

console.log(formatarHoras(totalSegundos))
