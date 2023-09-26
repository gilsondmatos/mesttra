const path = require('path')
const currentFile = path.dirname(process.argv[1])

//Leitura das linhas do arquivo dev/stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\n');

/*
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
*/

const valor = lines[0]
const especiesDisponiveis = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01]

const quantidadeEspecie = (valor, especie) => Math.trunc(valor / especie)
const sobraEspecie = (valor, especie) => (valor % especie).toFixed(2)


function quantidadeEspecies(valor, especies){
    const listaEspecies = especies.map( especie => {
        const quantidade = quantidadeEspecie(valor, especie)
        valor = sobraEspecie(valor, especie)
        return {
            especie: especie,
            quantidade: quantidade
        }
    })

    return listaEspecies
}

function exibirResultado() {
    const especies = quantidadeEspecies(valor, especiesDisponiveis)
    const notas = especies.slice(0,6)
    const moedas = especies.slice(6,12)

    console.log("NOTAS:")
    notas.forEach(nota => console.log(`${nota.quantidade} nota(s) de R$ ${nota.especie.toFixed(2)}`))
    
    console.log("MOEDAS:")
    moedas.forEach(moeda => console.log(`${moeda.quantidade} moeda(s) de R$ ${moeda.especie.toFixed(2)}`))

}

exibirResultado()






