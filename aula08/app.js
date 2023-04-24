/**********
 * Objetivo: Api para integração entre Back e Bando de Dados (GET, POST, PUT, DELETE)
 * Data: 14-04-2023
 * Autor: Artur Alves
 * Versão: 1.0
 ***********/

// Import das bibliotecas da API
 const express = require('express');
 const cors = require('cors');
 const bodyParser = require('body-parser');
const { request, response } = require('express');
const alunoDAO = require('./model/DAO/alunoDAO.js');

 // Cria o objeto app conforme a classe do express
 const app = express();

 // Definir as permissões do cors
 app.use((request, response, next) =>{
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


    // Endpoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){
        // Import do arquivo da controller que irá solicitar a model dos dados do BD
        let controllerAluno = require('./controller/controller_aluno.js')

        // Recebe os dados da controller do aluno
        let dadosAlunos = await controllerAluno.getStudents();

        //Valida se existe registros de aluno
        if(dadosAlunos){
            response.json(dadosAlunos);
            response.status(200)
        } else{
            response.json();
            response.status(404)
        }
            
    })

    // Endpoint: Retorna o aluno filtrando pelo id
    app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){
        let controller = require('./controller/controller_aluno.js')

        let idAluno = request.params.id;

        let dadosAlunos = await controller.findStudentsID(idAluno);

        if(dadosAlunos){
            response.json(dadosAlunos)
            response.status(200)
        } else{
            response.json();
            response.status(404)
        }
    })

    // Endpoint: Retorna o aluno filtrando pelo id
    app.get('/v1/lion-school/aluno/:name', cors(), async function(request, response){
        let controller = require('./controller/controller_aluno.js')

        let nomeAluno = request.params.nome;

        let dadosAlunos = await controller.findStudantByName(nomeAluno);

        if(dadosAlunos){
            response.json(dadosAlunos)
            response.status(200)
        } else{
            response.json();
            response.status(404)
        }
    })

    // Endpoint: Insere um dado novo
    app.post('/v1/lion-school/aluno', cors(), async function(request, response){

    })

    // Endpoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    })

    // Endpoint: Exclui um aluno filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    })

    app.listen(8080, function(){
        console.log('Servidor operando')
    })