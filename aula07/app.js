/****
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Data: 10/03/23
 * Autor: Artur Alves
 * Version 1.0
 ****/

 /***
  * Express - Dependência para realizar requisições de API pelo protocolo HTTP
  *     npm install express --save
  * 
  * Cors - Dependência para gerenciar permissões de requisição da API
  *     npm install cors --save
  * 
  * Body-Parser - Dependência que gerencia o corpo das requisições
  *     npm install body-parser --save
  */
// Import das dependecias do projeto

//Dependecia para criar as requisições da API
const express = require('express');

//Dependecia para gerenciar as permissões da API
const cors = require('cors');

//Dependecia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');
const { request, response } = require('express');

// Cria um objeto com as características do express
const app = express();

app.use((request, response, next)=>{
    // API pública - disponível para utilização de qualquer aplicação
    // API privada - somente o IP informado poderá consumir dados da API
    
    // Define se a API será pública ou privada
    response.header('Access-Control-Allow-Origin', '*');

    // Permite definir quais metodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELET, OPTIONS');

    // Envia para o cors() as regras de permissões
    app.use(cors());

    next();
})

// EndPoints
    // Async server para estabelecer um status de aguarde o processamento
        // OBS: Se não usar o async a requisição é perdida.
app.get('/estados', cors(), async function(request, response, next){
    const estadosCidades = require('./modulo/module.js');
    let estados = estadosCidades.getListaEstados();
    response.status(200);
    response.json(estados)
})

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080')
});