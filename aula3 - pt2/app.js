/*
 * Objetivo: Refazer o sistema de operações básicas com o professor
 * Data: 03/02/23
 * Autor: Artur ALves
 * Version: 1.0
 */

var matematica = require('./modulo/calculadora.js')

var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor: \n', function (numero1) {

    let valor1 = numero1.replace(',', '.');

    entradaDados.question('Valor2: \n', function (numero2) {

        let valor2 = numero2.replace(',', '.');

        entradaDados.question('Escolha uma operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function (tipoCalc) {

            let operacao = tipoCalc.toUpperCase();
            let resultado;

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('Erro: Não é possível calcular se algum dado estiver em branco.');

            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('Erro: Não é possível calcular se os dados digitados não forem números')

            } else {

                resultado = matematica.calculadora(valor1, valor2, operacao);
                if (resultado === false)
                    entradaDados.close();
                else
                    console.log(resultado);

            }
        })
    })

})
