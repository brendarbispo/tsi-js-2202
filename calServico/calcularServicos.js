

let tabela =[ ['3k', '2k', '1k'],
             ['4k', '3k', '2k'],
             ['--','--','3k']];

let servico = prompt ("Escolha o serviço: \n0 - Serviço 1 \n1 - Serviço 2 \n2 - Serviço 3 ");
let prazo = prompt("Escolha o prazo \n0 - UM HORA \n1 - DUAS HORAS \n2 - TRES HORAS")



if (validaEntrada(servico) && validaEntrada (prazo) ){

    alert("O serviço ficará em: " + tabela[servico][prazo]);

}
else {

    alert('ERRO: VERIFIQUE OS VALORES!');

}

function validaEntrada(dadoUsuario){
 
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}