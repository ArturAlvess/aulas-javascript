//import do arquivo json

var listaBrasil = require('../estados_cidades.js')

const getListaEstados = function(){

    let listaDeSiglasArray = []

    listaBrasil.estadosCidades.estados.forEach(function(estados){
        listaDeSiglasArray.push(estados.sigla)
    })

let listaDeSiglasJSON = {uf: listaDeSiglasArray, quantidade: listaDeSiglasArray.length}

return listaDeSiglasJSON
}

const getDadosEstado = function(estadosSigla){

    let siglaEstado = estadosSigla.toUpperCase();

    let listaDadosJSON = false;

    listaBrasil.estadosCidades.estados.forEach(function(estado){
        if(estado.sigla == siglaEstado){
            listaDadosJSON = {}

            listaDadosJSON.uf = estado.sigla;
            listaDadosJSON.descricao = estado.nome;
            listaDadosJSON.capital = estado.capital;
            listaDadosJSON.regiao = estado.regiao;
        }
    })

    return listaDadosJSON;
   
}

const getCapitalEstado = function(estadoSigla){

    let siglaEstado = estadoSigla.toUpperCase();

    let listaCapitalJSON = false;

    listaBrasil.estadosCidades.estados.forEach(function(capital){
        if(capital.sigla == siglaEstado){
            listaCapitalJSON = {}

            listaCapitalJSON.uf = capital.sigla;
            listaCapitalJSON.descricao = capital.nome;
            listaCapitalJSON.capital = capital.capital;
            
        }
    })

    return listaCapitalJSON;

}

const getEstadosRegiao = function(estadoRegiao){

    let primeiraLetra = estadoRegiao.charAt(0).toUpperCase();

    let resto = estadoRegiao.slice(1).toLowerCase();

    let regiaoEstado = primeiraLetra + resto;

    let listaRegiaoEstadosJSON;
    let listaEstadosArray = []
    let listaArrayEstados = {};

    if(regiaoEstado == ''){
        listaRegiaoEstadosJSON = false;
    } else if(!isNaN(regiaoEstado)){
        listaRegiaoEstadosJSON = false;
    } else{

    listaBrasil.estadosCidades.estados.forEach(function(estado){
        if(estado.regiao == regiaoEstado){

            let escolhaRegiao = {};

            escolhaRegiao.uf = estado.sigla;
            escolhaRegiao.descricao = estado.nome;

            listaEstadosArray.push(escolhaRegiao)
        }
    })

}

        if(listaEstadosArray.length != 0){
            listaRegiaoEstadosJSON = {}

            listaRegiaoEstadosJSON.regiao = regiaoEstado;

            listaRegiaoEstadosJSON.estado = listaEstadosArray;
        } else{
            false
        }
       
        return listaRegiaoEstadosJSON
}

const getCapitalPais = function(){

    let listaCapitaisJSON;

    let listaCapitaisArray = [];

    listaBrasil.estadosCidades.estados.forEach(function(estado){
        if(estado.capital_pais != undefined){
            
            let escolhaEstado = {}

            escolhaEstado.capital_atual = estado.capital_pais.capital

            escolhaEstado.uf = estado.sigla

            escolhaEstado.descricao = estado.nome

            escolhaEstado.capital = estado.capital

            escolhaEstado.regiao = estado.regiao

            escolhaEstado.capital_pais_ano_inicio = estado.capital_pais.ano_inicio

            escolhaEstado.capital_pais_ano_termino = estado.capital_pais.ano_fim

            listaCapitaisArray.push(escolhaEstado)
        }
    })

    listaCapitaisJSON = {}

    listaCapitaisJSON.capitais = listaCapitaisArray

    return listaCapitaisJSON
}
const getCidades = function(siglaEstado){
    let estadoSigla = siglaEstado.toUpperCase();
    let listaCidadesJSON;
    let listCidadesArray = []

    listaBrasil.estadosCidades.estados.forEach(function(estado){
        if (estado.sigla == estadoSigla){
            listaCidadesJSON = {}

            listaCidadesJSON.uf = estado.sigla
            listaCidadesJSON.descricao = estado.nome
            listaCidadesJSON.quantidade_cidades = estado.cidades.length;

            estado.cidades.forEach(function(cidade){
                listCidadesArray.push(cidade.nome)
            })

            listaCidadesJSON.cidades = listCidadesArray
        }
    })
    return listaCidadesJSON
}

console.log(getCidades('AL'))