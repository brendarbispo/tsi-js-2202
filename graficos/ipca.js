document.querySelector('button').addEventListener('click', mostraIpca);
 
 function mostraIpca(evento){
     evento.preventDefault();
 
    document.querySelector('#ipca').innerHTML = '';
     const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101';
    }
 
     fetch(url).then(function(retorno){
 
         return retorno.text();
 
     }).then(function(stringJson){
 
            let anoUsuario = document.querySelector('#ano').value;

         const indices = JSON.parse(stringJson);
 
        //////  Fazer em casa! //////
        //colocar os dados recuperados da API 
        //no gráfico
        let indice;
        let ipca = [];
     
        indices.forEach( function( mes ){

            anoString = mes.data.substring(6, 10);
            mesString = mes.data.substring(3, 5);
            anoMesString = anoString + '-' + mesString;

            if( parseInt(anoString) != anoUsuario && 
                anoUsuario != ""){
                return;
            }
        

            indice = parseFloat(mes.valor);

            ipca.push({ month: anoMesString, value: indice});
        });
    

        if(ipca.length == 0){

            alert(`Não há dados para o ano ${anoUsuario}`);
        }
 
         jsonParaMorris = {
                             element: 'ipca',
                                // Dados do gráfico
                            data: [
                                { year: '2008', value: 20 },
                                { year: '2009', value: 10 },
                                { year: '2010', value: 5 },
                                { year: '2011', value: 5 },
                                { year: '2012', value: 20 },
                                { year: '2013', value: 25 },
                                { year: '2014', value: 7 }
                            ],
                        
                            // Dados do gráfico
                            data: ipca,
                             // O nome do eixo com os valores de X
                            xkey: 'year',
                            
                            xkey: 'month',
                             // Uma lista de nomes dos atributos de dados contidos em Y
                             ykeys: ['value'],
                        
                             // Rótulos para os índices -- aparece quando passa o mouse por cima
                            labels: ['Value'],
                            labels: ['IPCA']
                         };
 
         new Morris.Line(jsonParaMorris); 