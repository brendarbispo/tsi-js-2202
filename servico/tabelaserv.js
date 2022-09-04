

let cabecalho = ['Serviço/Prazo', 'Serviço 1', 'Serviço 2', 'Serviço 3'];
let linha1 = ['0 - 24h', '1000k', '152$', '438$'];
let linha2 = ['1 - 48h', '500$', '87$', '259$'];
let linha3 = ['2 - 72h', '250$', '25$', '138$'];

let tabela = [linha1, linha2, linha3];

let objeto = { "linha": linha1 }

//PROCESSAMENTO DO DESENHO TABELA POR COMPLETO

let html = "<table>";

for (let i = 0; i < cabecalho.length; i++) {
    html += "<th> " + cabecalho[i] + "</th> ";
}

for (let i = 0; i < tabela.length; i++) {
    html += "<tr> ";

    let linha = tabela[i];

    for (let j = 0; j < linha.length; j++) {
        html += "<td> ";

        html += linha[j];

        html += "</td> ";
    }

    html += "</tr>";
}
html += "</table>";


//PEGA DIV
let t = document.querySelector("#tabela");
//INSERE A CONSTRUÇAO
t.innerHTML = html;


///-------------------------

let servico = prompt("Qual o serviço a ser feito? (1, 2, 3)?");
let prazo = prompt("Qual a qtd de horas para entrega?(0-24h, 1-48h, 2-72h)?");

document.write("O preço do servico será: "+ tabela[prazo][servico])