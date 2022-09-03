let peso = prompt("Inserir peso:");
let altura = prompt("Inserir altura:")

let resultado = IMC (peso, altura);

alert (resultado);

function IMC(peso, altura){

   let imc = peso / (altura*altura);

   let retorno = '';
   
   if(imc > 25){
        retorno = 'acima do peso';
   }
   else if (imc >= 18 && imc <= 25){
        retorno = 'peso ideal'
   }
   else{
        retorno = 'abaixo do peso';
   }
   return retorno;
}



