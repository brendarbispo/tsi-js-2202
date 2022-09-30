
// CRIACAO DE VETOR

let tabela =[ 
              [
                '3k', 
                '2k', 
                '1k'
              ],
              [
                '4k', 
                '3k', 
                '2k'
              ],
              [
                '--',
                '--',
                '3k'
              ]
             ];

//COLETANDO DADOS DO USUARIO

let servico = prompt ("Escolha o serviço: \n0 - Serviço 1 \n1 - Serviço 2 \n2 - Serviço 3 ");
let prazo = prompt("Escolha o prazo \n0 - UM HORA \n1 - DUAS HORAS \n2 - TRES HORAS")


// VALIDACAO DE ENTRADA

if (validaEntrada(servico) && validaEntrada (prazo) ){
    //ACESSAR A MATRIZ COM O INDICE DE CADA TABELA
    alert("O serviço ficará em: " + tabela[servico][prazo]);

}
else {

    alert('ERRO: VERIFIQUE OS VALORES!');

}

//FUNCAO PARA VALIDAR::
function validaEntrada(dadoUsuario){
  //USO DE OPERADOR TERNARIO 
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}

/*
  //FUNCAO SEM O USO DO OPERADOR TERNARIO
  function validarEntrada(dadoUsuario){
    return (dadoUsuario >= 0 && dadoUsuario <= 2);
  }
*/
