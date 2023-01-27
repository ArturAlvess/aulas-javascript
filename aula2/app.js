/****
 * Objetivo: Calcular a média de 4 notas escpçares.
 * Autor: Artur Alves
 * Data: 27/01/22
 * Versão: 1.0
 ****/

// readline import
 var readLine = require('readline');

 // Create an object to be specialist at data input from keyboard
 var entradaDados = readLine.createInterface({
     input : process.stdin,
     output : process.stdout
 })

/*
 * Variable create

    * var - create a global scope memory space to the project.
    *  this variable can be used in all archive.
    
    * let - create a local scope memory space to the project.
    *  this variable can be used only in the function created.
    
    * const - create a global or local scope memory space to the project.
    *  this const can be used in all archive and never will changed.
 * 
 * 
 */

// CallBack function to receive the student's name
 entradaDados.question('Digite seu nome: \n', function(nome){
     // Receive the value typed in keyboard
    let nomeAluno = nome;
    // CallBack function to receive the grade 1
    entradaDados.question('Digite a nota 1: \n', function(nota1){
        let valor1 = nota1;
    // CallBack function to receive the grade 2
        entradaDados.question('Digite a nota 2: \n', function(nota2){
            let valor2 = nota2;
    // CallBack function to receive the grade 3
            entradaDados.question('Digite a nota 3: \n', function(nota3){
                let valor3 = nota3;
    // CallBack function to receive the grade 4
                entradaDados.question('Digite a nota 4: \n', function(nota4){
                    let valor4 = nota4;
                    let nedia;

                    /*
                        Data type conversion

                        parseInt() - convert a string to integer
                        parseFloat() - convert a string to real

                        Number() - convert a string to number, according the value input the JS define if will be an integer or a real
                    */
                   // Validation to empty input
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '')
                    {
                        console.log('Todos valores devem ser preenchidos')
                    // Validantion to text input
                    }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
                    {
                        console.log('Existe algum número inválido')
                    } 
                    else {
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;

                        console.log(media);
                    }
                    
                })
            });
        });
    });
 });