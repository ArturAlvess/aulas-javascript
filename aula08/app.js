/**********
 * Objetivo: Api para integração entre Back e Bando de Dados (GET, POST, PUT, DELETE)
 * Data: 14-04-2023
 * Autor: Artur Alves
 * Versão: 1.0
 ***********/

// Import das bibliotecas da APIconst express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const alunoDAO = require('./model/DAO/alunoDAO.js');

// Cria o objeto app conforme a classe do express
const app = express();

// Definir as permissões do cors
app.use((request, response, next) => {
    // Define quem poderá acessar a API
    response.header('Access-Control-Allow-Origin', '*');
    // Define quais metodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Atribui permissões ao cors
    app.use(cors());

    next();

})

// CRUD

/***************************************************************
 * Objetivo: API D CONTROLE DE ALUNOS
 * Data: 14-04-2023
 * Autor: Artur Alves
 * Versão: 1.0
 ***************************************************************/

/* 
    -- Comandos de instalação do prisma --

    npm install prisma --save
    npx prisma
    npx prisma init
    npm install @prisma/client --save

    npx prisma migrate dev
*/


// Define que os dados que irão chegar no body da requisição será no padrão json
const bodyParserJson = bodyParser.json();
var controller = require('./controller/controller_aluno.js');
var message = require('./controller/modulo/config.js');
const { json } = require('body-parser');

// Endpoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
    // Import do arquivo da controller que irá solicitar a model dos dados do BD


    // Recebe os dados da controller do aluno
    let dadosAlunos = await controller.getStudents();

    //Valida se existe registros de aluno
    response.status(dadosAlunos.status)
    response.json(dadosAlunos)

})

// Endpoint: Retorna o aluno filtrando pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


    let idAluno = request.params.id;

    let dadosAlunos = await controller.findStudentsID(idAluno);

   response.status(dadosAlunos.status);
   response.json(dadosAlunos);
})

// Endpoint: Retorna o aluno filtrando pelo id
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function (request, response) {


    let nomeAluno = request.params.nome;

    let dadosAlunos = await controller.findStudantByName(nomeAluno);

    if (dadosAlunos) {
        response.json(dadosAlunos)
        response.status(200)
    } else {
        response.json();
        response.status(404)
    }
})

// Endpoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), bodyParserJson, async function (request, response) {

    let contentType = request.headers['content-type'];

    if (String(contentType).toLowerCase() == 'application/json') {


        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body;

        let resultDadosAluno = await controller.newStudant(dadosBody);

        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);

    }else{
        response.status(message.ERROR_IVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_IVALID_CONTENT_TYPE);
    }




})

// Endpoint: Atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJson, async function (request, response) {

    let contentType = request.headers['content-type'];

    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe o ID do aluno pelo parametro
        let idAluno = request.params.id;
        //Recebe os dados do aluno encaminhado no corpo da requisição
        let dadosBody = request.body;

        let resultDadosAluno = await controller.updateStudant(dadosBody, idAluno);

        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);
    } else {
        response.status(message.ERROR_IVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_IVALID_CONTENT_TYPE);
    }




})

// Endpoint: Exclui um aluno filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let idAluno = request.params.id;

    let dadosAlunos = await controller.deleteStudant(idAluno);

    response.status(dadosAlunos.status)
    response.json(dadosAlunos)
})

app.listen(8080, function () {
    console.log('Servidor operando')
})