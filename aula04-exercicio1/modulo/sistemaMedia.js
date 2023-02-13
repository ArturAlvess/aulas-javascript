/***********
 * Objetivo: Criar um sistema que calcule médias
 * Data: 10/02/23
 * Autor: Artur Alves
 * Versão: 1.0
 **********/

 function calcularMedia(numero1, numero2, numero3, numero4, nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, numeroExame){
    let nota1 = Number(numero1);
    let nota2 = Number(numero2);
    let nota3 = Number(numero3);
    let nota4 = Number(numero4);
    let media;

    
    // Tratamento de notas entre 0 e 100.
    if(nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100){
        console.log('Erro: Os valores devem ser entre 0 e 100.')
    } 
    
    else{
        media = (nota1 + nota2 + nota3 + nota4) / 4;
        return media;
    }

    if(media > 70){
        console.log('O aluno foi aprovado!')
    } else if(media < 50)
        console.log('O aluno foi reprovado!')

        

    if (media == undefined) {
        return false;
    } 
    

 }

function calcularExame(numero1, numero2, numero3, numero4, numeroExame){
    let nota1 = Number(numero1);
    let nota2 = Number(numero2);
    let nota3 = Number(numero3);
    let nota4 = Number(numero4);
    let media;
    let notaExame = Number(numeroExame);

    media = (nota1 + nota2 + nota3 + nota4) / 4;
    let mediaExame = (media + notaExame) / 2;

    return mediaExame;
}

 module.exports = {
     calcularMedia,
     calcularExame
}