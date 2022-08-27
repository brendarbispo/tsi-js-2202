//Relembrando questões basicas do JS
//Lopings
/*for
for (let i = 0; i <= 10; i++){
    document.write(i +"<br>");
}


let i = 0
while (i < 10) {
    i++;
    document.write(i +"<br>");

}


let i = 0
do{
    document.write(i +"<br>")
    i++
}while (i <= 10);



let a = parseInt(prompt("Altura A:"));
let b = parseInt(prompt("Altura B:"));

if(a > b){
    document.write("Altura do primeiro " + a + " é maior!");
}else{
    document.write("Altura do segundo " + b +" é maior!");
}


let i = 3;
switch(i){
    case 0:
        document.write("Opção A")
        break;
    case 1:
        document.write("Opção B")
        break;
    case 2:
        document.write("Opção C")
        break;
    default:
        document.write("Insira uma opção valida")
}

// TERNÁRIO
let x = 'f';

let res = x == 'm' ? 'm é maior': 'não é m';

document.write(res);
*/
// Coalescente
let coisa = null
let v = coisa ?? 'Não há';
document.write(v);