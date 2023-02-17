/*****
 * Objetivo: Criar um sistema que crie tabuadas
 * Autor: Artur Alves
 * Data: 17-02
 * Version: 1.0
 */

 function getTabuada(inicialTab, finalTab, multiplicadorMin, multiplicadorMax){
     let tabuadaIncial = Number(inicialTab);
     let tabuadaFinal = Number(finalTab);
     let minMultiplicador = Number(multiplicadorMin);
     let maxMultiplicador = Number(multiplicadorMax);
     let resultado;

     let tabuada = minMultiplicador;

     for(minMultiplicador; minMultiplicador <= maxMultiplicador; minMultiplicador++){
        console.log('--- Tabuada do ' + minMultiplicador + '---')

        for(contador = tabuadaIncial; contador <= tabuadaFinal; contador++){
            resultado = contador * tabuada;
            console.log(tabuada + ' x ' + contador + ' = ' + resultado)
        }
        tabuada++;
     }
     
 }

 module.exports = {
     getTabuada
 }