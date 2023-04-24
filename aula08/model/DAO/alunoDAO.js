/***************************************************************************************************************
 * Objetivo: Responsable for the studant's manipulate in the DataBase
 * Data: 14-04-2023
 * Autor: Artur Alves
 * Versão: 1.0
 **************************************************************************************************************/


 // Insere dados do aluno no banco
 const insertAluno = function(){

 }

 // Atualiza os dados do aluno
 const updateAluno = function(){

}

// Deleta os dados do aluno
const deleteAluno = function(){

}

// Retorna todos os alunos do banco
const selectAllAlunos = async function(){
    // import da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client');

    let prisma = new PrismaClient();

    // ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno';

    // $queryRawUnsafe(sql) - Permite interpretar uma variável como um scriptSQL
    // $queryRaw(select * from tbl_aluno) - Permite interpretar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // Valida se o BD retornou algum registro

    if(rsAluno.length > 0)
        return rsAluno;
    else
        return false;
    
}

// Retorna o aluno filtrando o ID
const selectByIdAluno = async function(id){
    let { PrismaClient } = require('@prisma/client');

    let prisma = new PrismaClient();
    
    let idAluno = id;

    let sql = 'select * from tbl_aluno where id=' + idAluno;

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0){
        return rsAluno;
    } else{
        return false
    }
}

// Retorna o aluno filtrando pelo nome
const selectByNameAluno = async function(nome){
    let { PrismaClient } = require('@prisma/client');

    let prisma = new PrismaClient();

    let nomeAluno = nome;

    // nomeAluno.replace('%', '4');
    let sql = "select * from tbl_aluno where nome like" + nomeAluno;

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0){
        return rsAluno;
    } else
        return false
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno
}