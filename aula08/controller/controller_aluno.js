/***************************************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 14-04-2023
 * Autor: Artur Alves
 * Versão: 1.0
 **************************************************************************************************************/
var message = require('./modulo/config.js')
var alunoDAO = require('../model/DAO/alunoDAO.js');
const { response } = require('express');


// Insert a new studant
const newStudant = async function (dadosAluno) {

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200


    ) {
        return message.ERROR_REQUIRED_FIELDS;
    } else {
        let resultDadosAluno = alunoDAO.insertAluno(dadosAluno);
        
        if (resultDadosAluno){

            // Chama a função que vai encontrar o ID gerado após o insert
            let novoAluno = await alunoDAO.selectLastID();

            let dadosAlunosJSON = {};
            dadosAlunosJSON.status = message.SUCCESS_CREATED_ITEM.status;
            dadosAlunosJSON.aluno = novoAluno;

            return dadosAlunosJSON;
        }else
            return message.ERROR_INTERNAL_SERVER;
    }

}

// Update an existing studant
const updateStudant = async function (dadosAluno, idAluno) {

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200

    ) {
        return message.ERROR_REQUIRED_FIELDS;
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID;
    } else {
        // Adiciona o id do aluno no json dos dados
        dadosAluno.id = idAluno;

        // Encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno);

        if (resultDadosAluno){
            let dadosAlunosJSON = {}
            dadosAlunosJSON.status = message.SUCCESS_UPDATED_ITEM.status;
            dadosAlunosJSON.aluno = dadosAluno;

            return dadosAlunosJSON;
        }else
            return message.ERROR_NOT_FOUND;
    }
}

// Delete an existing studant
const deleteStudant = async function (id) {

    if (id == '' || id == undefined || isNaN(id)) {
        return message.ERROR_INVALID_ID;
    } else {

        let findStudantByID = await alunoDAO.selectByIdAluno(id);
        if (findStudantByID) {

            let dadosAluno = await alunoDAO.deleteAluno(id);

            if (dadosAluno)
                return message.SUCCESS_DELETED_ITEM;
            else
                return message.ERROR_INTERNAL_SERVER;
        } else {
            return message.ERROR_NONEXISTENT_ID
        }

    }

}

// Return a list of every students
const getStudents = async function () {

    let dadosAlunosJSON = {};

    // Chama a função do arquivo DAO que irá retornar todos os registros do DB
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno) {
        // Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.status = message.SUCCESS_REQUEST.status
        dadosAlunosJSON.quantidade = dadosAluno.length;
        dadosAlunosJSON.alunos = dadosAluno;
        return dadosAlunosJSON;
    } else
        return message.ERROR_NOT_FOUND;
}

// Return the studant by id
const findStudentsID = async function (id) {

    if (id == '' || id == undefined || isNaN(id)) {
        return message.ERROR_INVALID_ID;
    } else {
        let dadosAlunosJSON = {};

        let dadosAluno = await alunoDAO.selectByIdAluno(id);

        if (dadosAluno) {
            dadosAlunosJSON.status = message.SUCCESS_REQUEST.status;
            dadosAlunosJSON.aluno = dadosAluno;
            return dadosAlunosJSON;
        } else
            return message.ERROR_NOT_FOUND;
    }
}


// Return the studant by name
const findStudantByName = async function (nome) {
    let dadosAlunosJSON = {};

    let alunoDAO = require('../model/DAO/alunoDAO.js')

    let dadosAluno = await alunoDAO.selectByNameAluno(nome);

    if (dadosAluno) {
        dadosAluno.quantidade = dadosAluno.length;
        dadosAlunosJSON.aluno = dadosAluno;
        return dadosAlunosJSON;
    } else
        return false
}

module.exports = {
    getStudents,
    findStudentsID,
    findStudantByName,
    newStudant,
    updateStudant,
    deleteStudant
}