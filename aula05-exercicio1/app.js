/***********
 * Objetivo: Criar um sistema que calcule médias e muitas coisas
 * Data: 10/02/23
 * Autor: Artur Alves
 * Versão: 1.0
 **********/

var calculadoraMedia = require('./modulo/sistemaMedia');

var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Qual o nome do aluno(a)? \n', function (nomeAluno) {
    let alunoNome = nomeAluno;

    entradaDados.question('Escolha o seu gênero: \n 1 - Masculino \n 2 - Feminino \n', function (sexoAluno) {
        let generoAluno = sexoAluno;

        if (generoAluno == 1) {
            var generoA = 'O aluno '
        } else if (generoAluno == 2) {
            var generoA = 'A aluna '
        } else {
            console.log('Erro: Você deve digitar o número de uma das opções')
            entradaDados.close();
        }
       

        entradaDados.question('Qual o nome do professor(a)? \n', function (nomeProfessor) {
            let professorNome = nomeProfessor;

            entradaDados.question('Escolha o gênero do professor(a): \n 1 - Masculino \n 2 - Feminino \n', function (sexoProfessor) {
                let generoProfessor = sexoProfessor;

                
            })
        })
    })
})

// entradaDados.question('Digite a primeira nota: \n', function(numero1){
//     let valor1 = numero1;

//     entradaDados.question('Digite a segunda nota: \n', function(numero2){
//         let valor2 = numero2;

//         entradaDados.question('Digite a terceira nota: \n', function(numero3){
//             let valor3 = numero3;

//             entradaDados.question('Digite a quarta nota: \n', function(numero4){
//                 let valor4 = numero4;

//                 if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
//                     console.log('Erro: Todos os valores devem ser preenchidos.')
//                     entradaDados.close();
//                 } else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
//                     console.log('Erro: Não é possível calcular caracteres que não são números.')
//                     entradaDados.close();
//                 } else{
//                     media = calculadoraMedia.calcularMedia(valor1, valor2, valor3, valor4);
//                     if(media != false){
//                         console.log(media);
//                     } else{
//                         entradaDados.close();
//                     }
//                 }
//             })
//         })
//     })
// })