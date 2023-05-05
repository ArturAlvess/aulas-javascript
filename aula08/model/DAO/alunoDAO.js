/***************************************************************************************************************
 * Objetivo: Responsable for the studant's manipulate in the DataBase
 * Data: 14-04-2023
 * Autor: Artur Alves
 * Versão: 1.0
 **************************************************************************************************************/

// import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client');

var prisma = new PrismaClient();

// Insere dados do aluno no banco
const insertAluno = async function (dadosAluno) {

    let sql = `insert into tbl_aluno (
        nome,
        rg,
        cpf,
        data_nascimento,
        email
    )  values (
        '${dadosAluno.nome}',
        '${dadosAluno.rg}',
        '${dadosAluno.cpf}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'
    )` ;

    let resultStatus = await prisma.$executeRawUnsafe(sql);
    
    if(resultStatus)
        return true;
    else
        return false;

}

// Atualiza os dados do aluno
const updateAluno = async function (dadosAluno) {
    let sql = `update tbl_aluno set
                        nome = '${dadosAluno.nome}',
                        rg = '${dadosAluno.rg}',
                        cpf = '${dadosAluno.cpf}',
                        data_nascimento = '${dadosAluno.data_nascimento}',
                        email = '${dadosAluno.email}'
                    where id = ${dadosAluno.id}`;

    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if(resultStatus)
        return true;
    else
        return false;
}

// Deleta os dados do aluno
const deleteAluno = async function (id) {
    let sql = `delete from tbl_aluno where id = '${id}'`

    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if(resultStatus)
        return true;
    else
        return false;
}


// Retorna todos os alunos do banco
const selectAllAlunos = async function () {

    // ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno';

    // $queryRawUnsafe(sql) - Permite interpretar uma variável como um scriptSQL
    // $queryRaw(select * from tbl_aluno) - Permite interpretar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // Valida se o BD retornou algum registro

    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;

}

// Retorna o aluno filtrando o ID
const selectByIdAluno = async function (id) {

    let idAluno = id;

    let sql = 'select * from tbl_aluno where id=' + idAluno;

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno;
    } else {
        return false
    }
}

// Retorna o aluno filtrando pelo nome
const selectByNameAluno = async function (nome) {
    let { PrismaClient } = require('@prisma/client');

    let prisma = new PrismaClient();

    // nomeAluno.replace('%', '4');
    let sql = `select * from tbl_aluno where nome like '${nome}%'`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno;
    } else
        return false
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno,
    insertAluno,
    updateAluno,
    deleteAluno
}