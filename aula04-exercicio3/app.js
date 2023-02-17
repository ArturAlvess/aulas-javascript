/****
 * Objetivo: Criar um sistema que separe números ímpares e pares.
 * Autor: Artur Alves
 * Data: 17-02-23
 * Version: 1.0
 ***/
var status = false;
var messageError;
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input : process.stdin,
    output : process.stdout

})
    
var separadorMat = require('./modulo/sistemaSeparador.js');

entradaDados.question('Digite o numero inicial: ', function (numeroInicial) {
    let inicialNumero = numeroInicial

    entradaDados.question('Digite o nuero final: ', function (numeroFinal) {
        let finalNumero = numeroFinal

        if(inicialNumero == '' || finalNumero == ''){
            console.log('Todos os campos devem ser preenchidos.')
            entradaDados.close();
        } else if(isNaN(inicialNumero) || isNaN(finalNumero)){
            console.log('Os campos devem ser preenchidos com números!!')
            entradaDados.close();
        } else{

        

        console.log('1- IMPAR')
        console.log('2- PAR')
        console.log('3- PAR E IMPAR')
        entradaDados.question('Escolha qual separação você deseja: ', function (escolhaUsuario) {
            let usuarioEscolha = escolhaUsuario

            
            if (usuarioEscolha == 1) {
                separadorPrecisa = separadorMat.getNumerosImpares(numeroInicial, numeroFinal)
            } 
            else if(isNaN(usuarioEscolha)){
                console.log('A escolha da separação deve ser um número!!')
                entradaDados.close();
            }
            else if (escolhaUsuario == 2) {
                separadorPrecisa = separadorMat.getNumerosPares(numeroInicial, numeroFinal)
            } else if (escolhaUsuario == 3) {
                separadorPrecisa = separadorMat.getNumerosPares(numeroInicial, numeroFinal)
                separadorPrecisa = separadorMat.getNumerosImpares(numeroInicial, numeroFinal)
            } else if (usuarioEscolha < 1 || usuarioEscolha){
                console.log('ERROR: Você deve escolher entre umas da opções!')
                entradaDados.close();
            }
        })

    }

    })
})