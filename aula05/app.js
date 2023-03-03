/**** 
 * Objetivo: Utilizar Array
 * Data: 24-02-23
 * Autor: Artur Alves
 * Version: 1.0
 *****/

const listaNomes = ['Artur', 'Monteiro', 'Oswaldo', 'Piaba'];
const listaProdutos = ['Mouse', 'Teclado', 'Monitor', 'Gabinete', 'SSD', 'Processador', 'Memória']

/****
 * JSON é compostor: chave(atributo) e valor
 * 
 * Chave    Valor   Chave      Valor        Chave     Valor
 * {nome : 'Artur', celular : '1148348348', email : 'artur@gmail.com'} 
 * 
 */

const exibindoDados = function () {

    console.log(typeof (listaNomes));

    console.log(typeof (listaNomes[2]));

    console.log(listaNomes[2]);

     console.log(listaNomes);


    // Traversing an array with While

    // Example with While
    console.log('--- Exemplo com while ---')
    let cont = 0;
    let qtdeItens = listaNomes.length;

    while (cont < qtdeItens) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)
        cont += 1;
    }
    console.log('------------------------')

    // Example with For

    console.log('--- Exemplo com o FOR ---')
    for (let cont = 0; cont < qtdeItens; cont++) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)
    }
    console.log('------------------------')

    // Example with For Each

    console.log('--- Exemplo com o FOR EACH ---')
    listaNomes.forEach(function (nomes) {
        console.log(`O nome do aluno é: ${nomes}`)
    })

};

const manipulandoDados = function () {
    // PUSH - Add new itens in the end of the array, preserving the previous itens
    listaProdutos.push('Memória');
    listaProdutos.push('Memória', 'Headset', 'WebCam');
    console.table(listaProdutos);


    // UNSHIFT - Add new itens in the start of the array, reorganizing all the itens
    listaProdutos.unshift('SSD', 'Processador')
    console.table(listaProdutos);

    // POP - Remove the last array's item
    listaProdutos.pop();
    console.table(listaProdutos)

    // SHIFT - Remove the initial item, reorganizing all the itens
    listaProdutos.shift();
    console.table(listaProdutos)

    // SLICE - Allow create a copy of an array
    const novosProdutos = listaProdutos.slice();

    // INDEXOF - Allow search inside of the array an item
    // If tje return is -1, the item wasn't found
    // If the return as bigger or equal as 0, the item was found and it returns the index 
    console.log(listaProdutos.indexOf('Mouse'))

    // IndexOf utilization example
    if (listaProdutos.indexOf('Teclado') >= 0)
        console.log('item found')
    else
        console.log('item not found')
};

const removerProdutos = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;
    // SPLICE - Allow erase one or more array's itens across the index
    // If was fourwarded only the index he will erase all the itens
    // to under
    // To limit the iten's quantity to be erased, should inform like second parameter
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }

    return status;
}

const removerItem = function (array, nomeItem) {
    let nome = nomeItem;
    let novoArray = array.slice();
    let indice = novoArray.indexOf(nome);
    let status;
    // Function processing

    if (indice >= 0) {
        novoArray.splice(indice, 1);
        status = true;
    } else {
        status = false
    }

    // Exit
    if (status)
        return novoArray;
    else
        return false;

}

const listagemProdutos = function () {
    // First way to create a JSON and just atributes values and brace
    //let listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes}

    // Second way to create a JSON, the braces and values will be assigned in the middle of the project
    // let listProdutosJSON = {};

    // listProdutosJSON.produtos = listaProdutos;
    // listProdutosJSON.clientes = listaNomes;
    // Extracting  JSON and Array's values
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.clientes[1])

    let listProdutosJSON = {}
    let listProdutosArray = 
        [
            { nome: 'Monitor', quantidade: 542, marca: 'HyperX', valor: 1.199, codigo: 1 },
            { nome: 'Mouse', quantidade: 347, marca: 'Logitech', valor: 399, codigo: 2 },
            { nome: 'Teclado', quantidade: 743, marca: 'HyperX', valor: 899, codigo: 3 },
            { nome: 'Headset', quantidade: 218, marca: 'Razer', valor: 959, codigo: 4 },
            { nome: 'Monitor', quantidade: 399, marca: 'Dell', valor: 799, codigo: 5 },
            { nome: 'Mouse', quantidade: 43, marca: 'Logitech', valor: 129, codigo: 6 },
            { nome: 'Monitor', quantidade: 243, marca: 'HyperX', valor: 2.229, codigo: 7 },
            { nome: 'Teclado', quantidade: 743, marca: 'Razer', valor: 1.289, codigo: 8 }
        ];
    // Colors array

    let listCoresHyperxArray = ['Black', 'White', 'Gray'];
    let listCoresRazerArray = ['Black', 'Pink', 'White'];
    let listCoresLogitechArray = ['Black', 'White']; 
    let listCoresDellArray = ['Black', 'White', 'Gray'];

    // Models array 
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', 'IPS'];
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Óptico'];

    // Add the array to the products into a JSON
    listProdutosJSON.produtos = listProdutosArray  

    // Add colors to products
    listProdutosJSON.produtos[3].cores = listCoresRazerArray
    listProdutosJSON.produtos[0].cores = listCoresHyperxArray
    listProdutosJSON.produtos[1].cores = listCoresLogitechArray
    listProdutosJSON.produtos[2].cores = listCoresHyperxArray
    listProdutosJSON.produtos[4].cores = listCoresDellArray
    listProdutosJSON.produtos[5].cores = listCoresLogitechArray
    listProdutosJSON.produtos[6].cores = listCoresHyperxArray

    // Add models to monitor
    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[6].modelos = listModelosMonitor
    listProdutosJSON.produtos[4].modelos = listModelosMonitor

    // Add models to keyboard
    listProdutosJSON.produtos[2].modelos = listModelosTeclado
    listProdutosJSON.produtos[7].modelos = listModelosTeclado

    console.log(listProdutosJSON);

    // listProdutosJSON.produtos.forEach(function(itemProduto){
    //     console.log('Nome: ' + itemProduto.nome);
    //     console.log('Marca: ' + itemProduto.marca);
    //     console.log('Valor: ' + 'R$ ' + itemProduto.valor);


    //     if(itemProduto.cores != undefined){

    //     //Percorrendo o array de cores dentro do array de produtos
    //         itemProduto.cores.forEach(function(itemCor){
    //             console.log('Cores: ' + itemCor)
    //         })
    //     }
    //     if(itemProduto.modelos != undefined){
    //     itemProduto.modelos.forEach(function(itemModelos){
    //         console.log('Modelos: ' + itemModelos)
    //     })
    // }

    // console.log('------------')
    //     });
   }

    // console.log('Nome: ' + listProdutosJSON.produtos[4].nome);
    // console.log('Marca: ' + listProdutosJSON.produtos[4].marca);
    // console.log('Valor: ' + listProdutosJSON.produtos[4].valor);
    // console.log('Cor: ' + listProdutosJSON.produtos[4].cores[2]);
    // console.log('Modelo: ' + listProdutosJSON.produtos[4].modelos[2]);
    // // console.log(listProdutosJSON.produtos[1].nome)
    // console.log(listProdutosJSON.produtos[1].marca)
    // console.log(listProdutosJSON.produtos[3])




//manipulandoDados();
// console.log(removerProdutos('SSD'));
// console.table(listaProdutos)
// console.log(removerItem(listaProdutos, 'Mouse'))
// console.table(listaProdutos)
// listagemProdutos();
exibindoDados();