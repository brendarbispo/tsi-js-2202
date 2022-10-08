const cartao = document.querySelector('.card');
const titulo = document.querySelector('h5');

cartao.addEventListener('mousemove', executarAlgo);

function executarAlgo(evento){

    //console.log(evento.type);
    titulo.textContent = 
        `Eixo X: ${evento.offsetX}
         Eixo Y: ${evento.offsetY}`;

    document.body.style.background = 
    `rgb(${evento.offsetX},
        ${evento.offsetY}, 40)`;
}
