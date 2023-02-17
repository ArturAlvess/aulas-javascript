/****
 * Objetivo: Criar um sistema que separe números ímpares e pares.
 * Autor: Artur Alves
 * Data: 17-02-23
 * Version: 1.0
 ***/

const getNumerosPares = function(numeroInicial, numeroFinal){

    let inicialNumero = Number(String(numeroInicial).replace(',','.'))
    let finalNumero = Number(String(numeroFinal).replace(',','.'))

    console.log('Numeros Pares')
    let contador = 0
    while(inicialNumero <= finalNumero ){
        if(inicialNumero % 2 == false){
            console.log(inicialNumero)
            contador++
        }
        inicialNumero++
    }
    
 }

 const getNumerosImpares = function(numeroInicial, numeroFinal){

    let inicialNumero = Number(String(numeroInicial).replace(',','.'))
    let finalNumero = Number(String(numeroFinal).replace(',','.'))

    console.log('Numeros Impares')
    let contador = 0
    while(inicialNumero <= finalNumero ){
        if(inicialNumero % 2 == true){
            console.log(inicialNumero)
            contador++
        }
        inicialNumero++
    }
    
 }

 module.exports = {
     getNumerosPares,
     getNumerosImpares
 }