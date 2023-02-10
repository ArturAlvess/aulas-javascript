/****
 * Objetivo: Um sistema que realiza as 4 operações matemáticas.
 * Autor: Artur Alves
 * Data: 30/01/22
 * Versão: 1.0
 ****/

 var readLine = require('readline');
const { O_NOCTTY } = require('constants');

 var entradaDados = readLine.createInterface({
     input : process.stdin,
     output : process.stdout
 })
 

 // CallBack

 entradaDados.question('Digite o primeiro valor: \n', function(valor1){
   let primeiroValor = valor1.replace(',','.');
   
   entradaDados.question('Digite o segundo valor: \n', function(valor2){
        let segundoValor = valor2.replace(',','.');

        entradaDados.question('Digite o número da operação desejada: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n \n Resposta: ', function(resposta){
          let escolha = resposta;
          let resultado;

           
          // operations realization

          
          if(primeiroValor == '' || segundoValor == ''){
            console.log('Erro: Existe algum valor em branco.')

          }else if(isNaN(primeiroValor) || isNaN(segundoValor)){
            console.log('Erro: Caractere inválido.')

          }else if(resposta < 1 || resposta > 4){
            console.log('Operação inexistente, por favor selecione uma das operações listadas')
          } else if(isNaN(resposta)){
            console.log('Erro: Você deve digitar o número da operação.')
          }
          else if(escolha == 1){
          
            resultado = Number(primeiroValor) + Number(segundoValor)
            console.log('O resultado da sua conta é: ' + resultado.toFixed(1));

          } if(escolha == 2){
            resultado = Number(primeiroValor) - Number(segundoValor)
            console.log('O resultado da sua conta é: ' + resultado.toFixed(1));

          } if(escolha == 3){
            resultado = Number(primeiroValor) * Number(segundoValor)
            console.log('O resultado da sua conta é: ' + resultado.toFixed(1));

          } if(escolha == 4 && segundoValor == 0){
            console.log('Não é possível dividir por 0')
          } else if(escolha == 4){
            resultado = Number(primeiroValor) / Number(segundoValor);
            console.log('O resultado da sua conta é: ' + resultado.toFixed(1));
          }
          
        })
   })
 })