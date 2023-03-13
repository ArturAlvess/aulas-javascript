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

const estadosCidades = require('./modulo/module.js');

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
    
    let estados = estadosCidades.getListaEstados();

    // tratamento para validar o sucesso da requisição
    if(estados)
    {
        response.status(200);
        response.json(estados)
    }
    else
    {
        response.status(500);
    }
})

//EndPoint: Lista os dados do estado filtrando pela sigla do estado
app.get('/estado/:uf', cors(), async function(request, response, next){
   
    let statusCode;
    let dadosEstado = {};
    //Recebe a sigla do estado que será enviada pelo URL da requisição
    let siglaEstado = request.params.uf; 

    //Tratamento para validação de entrada de dados correta
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosEstado.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem as exigências (não pode ser vazio, precisa de 2 digitos)'
    }else{
        let estado = estadosCidades.getDadosEstado(siglaEstado);

        if(estado){
            statusCode = 200;
            dadosEstado = estado;
        }else{
            statusCode = 404;
        }
    }
    // Return 
    response.status(statusCode);
    response.json(dadosEstado);
});
// EndPoint:
app.get('/capital/:uf', cors(), async function(request, response, next){
    let statusCode;
    let dadosCapital = {};

    let siglaEstado = request.params.uf;

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosCapital.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem as exigências (não pode ser vazio, precisa de 2 digitos)'
    }else{
        let capital = estadosCidades.getCapitalEstado(siglaEstado);

        if(capital){
            statusCode = 200;
            dadosCapital = capital;
        } else{
            statusCode = 404;
        }
    }
    response.status(statusCode);
    response.json(dadosCapital)
});

app.get('/regiao/:nomeRegiao', cors(), async function(request, response, next){
    let statusCode;
    let dadosRegiao = {};

    let estadoRegiao = request.params.nomeRegiao;

    if(estadoRegiao == '' || estadoRegiao == undefined || !isNaN(estadoRegiao)){
        statusCode = 400;
        dadosRegiao.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem as exigências (não pode ser vazio, precisa de 2 digitos)'
    } else{
        let regiao = estadosCidades.getEstadosRegiao(estadoRegiao);

        if(regiao){
            statusCode = 200;
            dadosRegiao = regiao;
        } else{
            statusCode = 404
        }
    }
    response.status(statusCode);
    response.json(dadosRegiao)
})

app.get('/capitalPais', cors(), async function(request, response, next){
    let statusCode;
    let dadosCapitalPais = {};

    let capital = estadosCidades.getCapitalPais();

    if(capital){
        statusCode = 200;
        dadosCapitalPais = capital;
    } else{
        statusCode = 404;
    }

    response.status(statusCode);
    response.json(dadosCapitalPais)
});

app.get('/cidades/:uf', cors(), async function(request, response, next){
    let statusCode;
    let dadosCidades = {};

    let siglaEstado = request.params.uf;

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosCidades.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem as exigências (não pode ser vazio, precisa de 2 digitos)'
    }else{
        let cidades = estadosCidades.getCidades(siglaEstado)

        if(cidades){
            statusCode = 200;
            dadosCidades = cidades;
        }else{
            statusCode = 404;
        }
    }
    response.status(statusCode);
    response.json(dadosCidades)

})
//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080')
});

