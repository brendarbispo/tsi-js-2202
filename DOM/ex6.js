//COMO ATUALIZAR ELEMENTO COM JS

//Criacao de um novo elemento
const novoTitulo = document.createElement('h2');

//Colocamos as caracteristicas que desejamos
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//Capturamos o elemento h5 atual (que esta no html)
const tituloAtual = document.getElementById('task-title');

//capturamos o elemento mãe/pai do elemento que vamos atualizar
let divMaeDoTitulo = document.getElementsByClassName('card-action');

divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual);
