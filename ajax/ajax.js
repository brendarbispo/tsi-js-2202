document.
        querySelector('button').
        addEventListener('click', recuperaConteudoAJAX);


function recuperaConteudoAJAX(){
    const XHR = new XMLHttpRequest();
    
    XHR.open('GET', 'conteudo.txt', true);
    XHR.onload = function(){
        if(this.status == 200){
            document.getElementById('dadoRecuperado').innerHTML
                = this.responseText;
        }
    }

    XHR.send();
}