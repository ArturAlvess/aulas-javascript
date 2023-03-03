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

const getDadosEstado = function(){
    let listaDadosSiglaArray = []
    let listaDadosNomeArray = []
    let listaDadosCapitalArray = []
    let listaDadosRegiaoArray = []

    listaBrasil.estadosCidades.estados.forEach(function(dados){
        listaDadosSiglaArray.push(dados.sigla)
        listaDadosNomeArray.push(dados.nome)
        listaDadosCapitalArray.push(dados.capital)
        listaDadosRegiaoArray.push(dados.regiao)
    })

    let listaDeDadosJSON = {uf:listaDadosSiglaArray, descricao: listaDadosNomeArray, capital: listaDadosCapitalArray, regiao: listaDadosRegiaoArray}

    return listaDeDadosJSON
}
console.log(getDadosEstado('RJ'))