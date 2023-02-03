/**
 * Objetivo: Arquivo de funções para calculos matemáticas
 * Data: 03/02/23
 * Autor: Artur Alves
 * Version: 1.0
 **/

// Function to realize math operations
function calculadora(numero1, numero2, tipoCalc) {
    
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalc.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;

    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;

    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;

    } else if (operacao == 'DIVIDIR') {
        resultado = valor1 / valor2;
        if (valor2 == 0) {
            console.log('Erro: Não é possível realizar a divisão por 0.')

        } else {
            resultado = valor1 / valor2
        }

    } else {
        console.log('Erro: a sua escolha de operação matemática foi inválidada');
        entradaDados.close();
    }
    if (resultado == undefined || resultado == Infinity) {
        return false;
    } else {
        return resultado;
    }
}


module.exports = {
    calculadora
}