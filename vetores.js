let amigos = ['Brenda',
             'Bruna', 
             'Marta', 
             'Yuri', 
             'Matheus'];
// Loping com vetor

for(let i = 0; i < amigos.length; i++ ){

    console.log(`linha + ${i}`); // <--Template
    console.log(amigos[i]);
}
console.log(amigos[2]);

//forech ::: for = para - each = cada
amigos.forEach(function(valor, indice){

    console.log(`${indice}: ${valor}`);
})

//Map

amigos.map(function(val){
    console.log(val);
})


