/**** 
 * Objetivo: Utilizar Array
 * Data: 24-02-23
 * Autor: Artur Alves
 * Version: 1.0
 *****/

const listaNomes = ['Artur', 'Monteiro', 'Oswaldo', 'Piaba'];
const listaProdutos = ['Mouse', 'Teclado', 'Monitor', 'Gabinete', 'SSD', 'Processador', 'Memória']

const exibindoDados = function(){

 console.log(typeof(listaNomes));

 console.log(typeof(listaNomes[2]));

 console.log(listaNomes[2]);

//  console.table(listaNomes);


 // Traversing an array with While

 // Example with While
 console.log('--- Exemplo com while ---')
 let cont = 0;
 let qtdeItens = listaNomes.length;

 while(cont < qtdeItens){
     console.log(`O nome do aluno é: ${listaNomes[cont]}`)
     cont +=1;
 }
 console.log('------------------------')

// Example with For

 console.log('--- Exemplo com o FOR ---')
 for(let cont = 0; cont < qtdeItens; cont++){
    console.log(`O nome do aluno é: ${listaNomes[cont]}`)
 }
 console.log('------------------------')

// Example with For Each

 console.log('--- Exemplo com o FOR EACH ---')
 listaNomes.forEach(function(nomes){
    console.log(`O nome do aluno é: ${nomes}`)
 })
 
};

const manipulandoDados = function(){
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
    if(listaProdutos.indexOf('Teclado') >= 0)
        console.log('item found')
    else
        console.log('item not found')
};

const removerProdutos = function(nomeProduto){
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;
    // SPLICE - Allow erase one or more array's itens across the index
        // If was fourwarded only the index he will erase all the itens
        // to under
        // To limit the iten's quantity to be erased, should inform like second parameter
    if(indice >= 0){
        listaProdutos.splice(indice, 1);
        status = true;
    } else{
        status = false;
    }

    return status;
}

const novaLista = function(nomeProduto){
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;
    console.log('---- Lista Original ----')
    console.table(listaProdutos)
    console.log('---- Lista Original ----')


    console.log('---- Lista 2 ----')
    const novaListaProdutos = listaProdutos.slice();

    // Function processing

    if(indice >= 0){
        novaListaProdutos.splice(indice, 1);
        status = true;
        console.table(novaListaProdutos)
    } else{
        status = false
    }
    console.log('---- Lista 2 ----')

    // Exit
    if(status)
        return novaListaProdutos
    else
        return false;

}
//manipulandoDados();
// console.log(removerProdutos('SSD'));
// console.table(listaProdutos)
novaLista('Teclado');