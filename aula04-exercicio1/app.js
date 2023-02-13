/***********
 * Objetivo: Criar um sistema que calcule médias e muitas coisas
 * Data: 10/02/23
 * Autor: Artur Alves
 * Versão: 1.0
 **********/

var calculadoraMedia = require('./modulo/sistemaMedia.js');

var readLine = require('readline');

var status = true;
var messageError;

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Qual o nome do aluno(a)? \n', function (nomeAluno) {
    let alunoNome = nomeAluno;

    if (alunoNome == '') {
        messageError = 'Erro: O nome do aluno não pode estar em branco.'
        status = false;
    }

    entradaDados.question('Escolha o seu gênero: \n 1 - Masculino \n 2 - Feminino \n', function (sexoAluno) {
        let generoAluno = Number(sexoAluno);
        let definicaoAluno;

        if (generoAluno == 1) {
            definicaoAluno = 'O aluno '
        } else if (generoAluno == 2) {
            definicaoAluno = 'A aluna '
        } else {
            messageError = 'Erro: Verifique a escolha de gênero do aluno.'
            status = false;
        }
        entradaDados.question('Qual o nome do professor(a)? \n', function (nomeProfessor) {
            let professorNome = nomeProfessor;

            if (professorNome == '') {
                messageError = 'Erro: O nome do professor não pode estar em branco.'
                status = false;
            }

            entradaDados.question('Escolha o gênero do professor(a): \n 1 - Masculino \n 2 - Feminino \n', function (sexoProfessor) {
                let generoProfessor = Number(sexoProfessor);
                let definicaoProfessor;

                if (generoProfessor == 1) {
                    definicaoProfessor = 'Professor: '
                } else if (generoProfessor == 2) {
                    definicaoProfessor = 'Professora: '
                } else {
                    messageError = 'Erro: Verifique a escolha de gênero do professor.'
                    status = false;
                }

                entradaDados.question('Qual o nome do seu curso? \n', function (nomeCurso) {
                    let cursoNome = nomeCurso;

                    entradaDados.question('Qual o nome da disciplina? \n', function (nomeDisciplina) {
                        let disciplinaNome = nomeDisciplina;

                        entradaDados.question('Digite a primeira nota: \n', function (numero1) {
                            let valor1 = numero1;

                            entradaDados.question('Digite a segunda nota: \n', function (numero2) {
                                let valor2 = numero2;

                                entradaDados.question('Digite a terceira nota: \n', function (numero3) {
                                    let valor3 = numero3;

                                    entradaDados.question('Digite a quarta nota: \n', function (numero4) {
                                        let valor4 = numero4;
                                        let media
                                        let statusAluno;

                                        // Data Treatament
                                        if(!isNaN(alunoNome) || !isNaN(professorNome) || !isNaN(cursoNome) || !isNaN(disciplinaNome)){
                                            messageError = 'Erro: Você não pode digitar números em campos de nome.'
                                            status = false;
                                        } else if(alunoNome == ''
                                         || professorNome == '' 
                                         || cursoNome == '' 
                                         || disciplinaNome == ''
                                         || valor1 == '' 
                                         || valor2 == '' 
                                         || valor3 == '' 
                                         || valor4 == ''
                                         || generoProfessor == ''
                                         || generoAluno == ''){
                                             messageError = 'Erro: Você não pode deixar NENHUM espaço em branco.'
                                             status = false;
                                         } else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                                             messageError = 'Erro: As notas devem ser números!!'
                                             status = false;
                                         }

                                        media = calculadoraMedia.calcularMedia(numero1, numero2, numero3, numero4)
                                        if(media < 50){
                                            statusAluno = 'REPROVADO'
                                                    console.log('------ Relatório do Aluno ------')
                                                    console.log(definicaoAluno + alunoNome + ' foi ' + statusAluno + ' na disciplina: ' + disciplinaNome)
                                                    console.log('Curso: ' + cursoNome)
                                                    console.log(definicaoProfessor + professorNome)
                                                    console.log('Notas do Aluno: ' + valor1 + ', ' + valor2 + ', ' + valor3 + ', ' + valor4)
                                                    console.log('Média Final: ' + media)
                                                    console.log('------------------------------------') 
                                        } else if(media >= 50 && media <= 69){
                                            statusAluno = 'EXAME'
                                            console.log('Sua média é: ' + media);
                                            entradaDados.question('Digite a nota do exame: \n', function(numeroExame){
                                                let notaExame = numeroExame;
                                                mediaExame = calculadoraMedia.calcularExame(numero1, numero2, numero3, numero4, notaExame)

                                                if(mediaExame >= 60 && mediaExame <= 100){
                                                    statusAluno = 'APROVADO'
                                                    console.log('------ Relatório do Aluno ------')
                                                    console.log(definicaoAluno + alunoNome + ' foi ' + statusAluno + ' na disciplina: ' + disciplinaNome)
                                                    console.log('Curso: ' + cursoNome)
                                                    console.log(definicaoProfessor + professorNome)
                                                    console.log('Notas do Aluno: ' + valor1 + ', ' + valor2 + ', ' + valor3 + ', ' + valor4 + ', ' + notaExame)
                                                    console.log('Média Final: ' + media)
                                                    console.log('Média Exame: ' + mediaExame)
                                                    console.log('------------------------------------') 
                                                } else if(mediaExame <= 60 && mediaExame >= 0){
                                                    statusAluno = 'REPROVADO'
                                                    console.log('------ Relatório do Aluno ------')
                                                    console.log(definicaoAluno + alunoNome + ' foi ' + statusAluno + ' na disciplina: ' + disciplinaNome)
                                                    console.log('Curso: ' + cursoNome)
                                                    console.log(definicaoProfessor + professorNome)
                                                    console.log('Notas do Aluno: ' + valor1 + ', ' + valor2 + ', ' + valor3 + ', ' + valor4 + ', ' + notaExame)
                                                    console.log('Média Final: ' + media)
                                                    console.log('Média Exame: ' + mediaExame)
                                                    console.log('------------------------------------') 
                                                } else if(media >= 70 && media >= 101){
                                                    statusAluno = 'APROVADO'
                                                    console.log('------ Relatório do Aluno ------')
                                                    console.log(definicaoAluno + alunoNome + ' foi ' + statusAluno + ' na disciplina: ' + disciplinaNome)
                                                    console.log('Curso: ' + cursoNome)
                                                    console.log(definicaoProfessor + professorNome)
                                                    console.log('Notas do Aluno: ' + valor1 + ', ' + valor2 + ', ' + valor3 + ', ' + valor4)
                                                    console.log('Média Final: ' + media)
                                                    console.log('------------------------------------')
                                                }
                                            })
                                        }
                                       
                                    })
                                })
                            })
                        })
                    })


                })

                if (status == false) {
                    console.log(messageError)
                    entradaDados.close()
                }



            })
        })
    })
})

