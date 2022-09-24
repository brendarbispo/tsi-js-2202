/*
let e = document.createElement('li'); //Criar elemento
li.className = 'collection-item'; //define class CSS
*/

//COMO CRIAR ELEMENTOS::

let novoItemNaLista = document.createElement('li');

//define id
novoItemNaLista.id = 'novo-item';

//Definea classe CSS do novo elemento
novoItemNaLista.className = 'collection-item';

//Adiciona um atibuto
novoItemNaLista.setAttribute('tittle', ' Novo item na lista'); //colocar novo atributo;

//Adiciona um node filho
novoItemNaLista.appendChild(
    document.createTextNode('Fazer exercicios fisico'));

//console.log(novoItemNaLista);

//criar o lemento para dentro do li
let elementoAncora = document.createElement ('a');

elementoAncora.className = 'delette-item secondary-content';

elementoAncora.setAttribute('href','#');

//criar sub elemento <i›
let elementoIcone = document.createElement('i');

elementoIcone.className = 'fa fa-remove';

//Adiciona o <a> em <li>
novoItemNaLista.appendChild(elementoAncora);

//Como capturar o <ul> querySelector
//let elementoUele = document.querySelector('ul.collection');
//elementoUele.appendChild(novoItemNaLista);

//Como capturar o <ul> pela classe
let elementoUele = document.getElementsByClassName('collection');

elementoUele[0].appendChild(novoItemNaLista);
//novoItemNaLista.query

//console. log (novoItemNaLista);


///////


