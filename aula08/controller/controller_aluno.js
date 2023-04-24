/***************************************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 14-04-2023
 * Autor: Artur Alves
 * Versão: 1.0
 **************************************************************************************************************/

const { selectAllAlunos } = require("../model/DAO/alunoDAO")

// Insert a new studant
 const newStudant = function(studantData){

}

// Update an existing studant
const updateStudant = function(studantData){

}

// Delete an existing studant
const deleteStudant = function(studantData){

}

// Return a list of every students
const getStudents = async function(){

    let dadosAlunosJSON = {};
    
    let alunoDAO = require('../model/DAO/alunoDAO.js');

    // Chama a função do arquivo DAO que irá retornar todos os registros do DB
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno){
        // Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length;
        dadosAlunosJSON.alunos = dadosAluno;
        return dadosAlunosJSON;
    } else
        return false;
}

// Return the studant by id
const findStudentsID = async function(id){
    let dadosAlunosJSON = {};

    let alunoDAO = require('../model/DAO/alunoDAO.js')

    let dadosAluno = await alunoDAO.selectByIdAluno(id);

    if(dadosAluno){
        dadosAlunosJSON.aluno = dadosAluno;
        return dadosAlunosJSON;
    } else
        return false;
}

// Return the studant by name
const findStudantByName = async function(nome){
    let dadosAlunosJSON = {};

    let alunoDAO = require('../model/DAO/alunoDAO.js')

    let dadosAluno = await alunoDAO.selectByNameAluno(nome);

    if(dadosAluno){
        dadosAlunosJSON.aluno = dadosAluno;
        return dadosAlunosJSON;
    } else
        return false
}

module.exports = {
    getStudents,
    findStudentsID,
    findStudantByName
}