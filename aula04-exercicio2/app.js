/*****
 * Objetivo: Criar um sistema que crie tabuadas
 * Autor: Artur Alves
 * Data: 17-02
 * Version: 1.0
 */
var calcTabuada = require('./modulo/calcularTabuada.js')
var readLine = require('readline');

var status = true;
var messageError;

var entradaDados = readLine.createInterface({
    input : process.stdin,
    output : process.stdout

})
    

entradaDados.question('Digite o número inicial da tabuada: ', function(inicialTab){
    let tabInicial = Number(inicialTab);

    entradaDados.question('Digite o número final da tabuada: ', function(finalTab){
        let tabFinal = Number(finalTab);

        entradaDados.question('Digite o mínimo multiplicador: ', function(multiplicadorMin){
            let minMultiplicador = Number(multiplicadorMin);

            entradaDados.question('Digite o máximo multiplicador: ', function(multiplicadorMax){
                let maxMultiplicador = Number(multiplicadorMax);

               
                //Data processing
              
                if(tabInicial < 2 && tabFinal > 100){
                    messageError = 'A entrada da tabuada deve ser entre 2 e 100.'
                    status = false;
                } else if(isNaN(tabInicial) || isNaN(tabFinal) || isNaN(minMultiplicador) || isNaN(maxMultiplicador)){
                    messageError = 'Verifique os caracteres, há algum inválido.'
                    status = false;
                } else if (minMultiplicador > maxMultiplicador ){
                    messageError = 'O mínimo multiplicador não pode ser maior que o máximo.'
                    status = false;
                } else if (tabInicial > tabFinal){
                    messageError = 'A tabuada inicial não pode ser maior que a final.'
                    status = false;
                }
                else if(minMultiplicador < 1 && maxMultiplicador > 50){
                    messageError = 'Os multiplicadores devem estar entre 1 e 50.'
                    status = false;
                }else if(tabInicial == '' || tabFinal == '' || minMultiplicador == '' || maxMultiplicador == ''){
                    messageError = 'Todos os espaços devem ser preenchidos!!'
                    status = false;
                } else{
                    tabuada = calcTabuada.getTabuada(inicialTab, finalTab, multiplicadorMin, multiplicadorMax)
                }
                
                if (status == false) {
                    console.log(messageError)
                    entradaDados.close()
                }
               
                

                
            })
        })
        
    })
    
})

