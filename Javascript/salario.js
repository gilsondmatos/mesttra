const prompt = require('prompt-sync')();

var salarioMinimo,
    salarioFuncionario,
    mediaSalarios;

    function calcularMediaSalarios(salarioFuncionario, salarioMinimo) {
        return salarioFuncionario/salarioMinimo
    }

    function formatarValorReais(valor) {
        return valor.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
    }

    function main() {
        salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo em Reais: "));
        salarioFuncionario = parseFloat(prompt("Digite o valor do seu salário em Reais: "));

        mediaSalarios = calcularMediaSalarios(salarioFuncionario,salarioMinimo);

        console.log("O funcionário recebe " + mediaSalarios.toFixed(1) + " salários mínimos");

    }

 main()