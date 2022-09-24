let v = ['Brenda', 'Rodrigues', 'Bispo'];

v.forEach(fazAlgo);{
    function fazAlgo(nome, id){
        console.log(nome);
        console.log(id);

        if(nome == 'Bispo'){
            v[id] = 'Linda';
        }
    }
}