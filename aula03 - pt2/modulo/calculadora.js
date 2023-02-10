/**
 * Objetivo: Arquivo de funções para calculos matemáticas
 * Data: 03/02/23
 * Autor: Artur Alves
 * Version: 1.0
 **/

// Function to realize math operations (first way)
// function calculadora(numero1, numero2, tipoCalc) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalc.toUpperCase();
//     let resultado;
//     let status = true;

//     /*  if (operacao == 'SOMAR') {
//          resultado = valor1 + valor2;
 
//      } else if (operacao == 'SUBTRAIR') {
//          resultado = valor1 - valor2;
 
//      } else if (operacao == 'MULTIPLICAR') {
//          resultado = valor1 * valor2;
 
//      } else if (operacao == 'DIVIDIR') {
//          resultado = valor1 / valor2;
//          if (valor2 == 0) {
//              console.log('Erro: Não é possível realizar a divisão por 0.')
//              status = false;
 
//          } else {
//              resultado = valor1 / valor2
//          }
 
//      } else {
//          console.log('Erro: a sua escolha de operação matemática foi inválidada');
//          return false;
//      } */

//     switch (operacao) {
//         case 'SOMAR':
//             resultado = valor1 + valor2;
//             break;
//         case 'SUBTRAIR':
//             resultado = valor1 - valor2;
//             break;
//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2;
//             break;
//         case 'DIVIDIR':
//             if (valor2 == 0) {
//                 console.log('Erro: Não é possível realizar a divisão por 0.')
//                 status = false;

//             } else
//                 resultado = valor1 / valor2

//             break;
//         default:
//             console.log('Erro: a sua escolha de operação matemática foi inválidada');
//             return false;

//     }

//     if (resultado == undefined || resultado == Infinity && status == false) {
//         status = false;
//     } else {
//         return resultado;
//     }
// }
// Second way to create a function
const calculadora = function(numero1, numero2, tipoCalc){
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalc.toUpperCase();
    let resultado;
    let status = true;

    switch (operacao) {
        case 'SOMAR':
            resultado = SOMAR(valor1, valor2)
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2)
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2)
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('Erro: Não é possível realizar a divisão por 0.')
                status = false;

            } else
                resultado = DIVIDIR(valor1, valor2)

            break;
        default:
            console.log('Erro: a sua escolha de operação matemática foi inválidada');
            return false;

    }

    if (resultado == undefined || resultado == Infinity && status == false) {
        status = false;
    } else {
        return resultado;
    }

    
}

const SOMAR = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR = (valor1, valor2) => valor1 * valor2;
const DIVIDIR = (valor1, valor2) => valor1 / valor2;

module.exports = {
    calculadora
}