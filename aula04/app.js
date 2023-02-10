//  * Objetivo: Arquivo destinado ao processamento do calculo de uma tabuada 
//  * Data: 09/02/2023
//  * Autor: Artur Alves
//  * Versão: 1.0
 
var tabuada = require('./modulo/tabuada.js')

var readLine = require('readline');
const { calcularTabuada } = require('./modulo/tabuada.js');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o multiplicando: \n', function(tabuada){
    let valor1 = tabuada;

    entradaDados.question('Digite o máximo multiplicador: \n', function(maxContador){

        let valor2 = maxContador;
        let resultado;

        if(valor1 == '' || valor2 == ''){
            console.log('Não é possível calcular um número em branco.')
        } else if(isNaN(valor1) || isNaN(valor2)){
            console.log('Não é possível calcular se os dados não forem números.')
        } else {
            resultado = calcularTabuada(valor1, valor2)
            if(resultado === false)
                entradaDados.close();
            else
            console.log(resultado)
        }
        
    })

})