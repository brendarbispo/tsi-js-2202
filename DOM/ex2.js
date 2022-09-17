let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function(evento){
    evento.preventDefault();
        let serv = document.getElementById('servico');
        let prazo = document.getElementById('prazo');
        let res = document.getElementById('resultado');
         
         //recuperar os dados da matriz
         let preco = calculaPreco(serv.value, prazo.value);
         

        res.innerText = `O preço é ${preco}`;

        //ver dados do evento (click) no console::
        console.log(evento);

        //Obter os valores do serviço e prazo::        
});

function calculaPreco(servico, prazo){
        let tabela = [ ['3k', '2k', '1k'],
                    ['4k', '3k', '2k'],
                    ['Não faz','Não faz','3k']];

                return tabela [servico][prazo];
}


/*
btnCalcular.addEventListener('click', executa ());

function executa(evento){
   alert(evento);
}

//console.log(btnCalcular);
*/