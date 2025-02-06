let participantes = [];
let sorteados = [];
let sorteio =[];
let participantesHTML = document.getElementById('lista-amigos');


function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ''){
        alert('Informação inválida!');
    }else{
        if(participantes.includes(amigo.value)){
            alert('Este nome já está na lista!');            
        }else{
            participantes.push(amigo.value);
            participantesHTML.innerHTML = participantes;
            amigo.value = '';
         };
    };
};

function definirAmigoSecreto(lista){
    let nomeAmigoSorteado = lista[parseInt(Math.random()*lista.length)];
    return nomeAmigoSorteado;
};


function sortear(){
    let resultadoSorteio = document.getElementById('lista-sorteio');
    if(participantes.length >= 4){
        for(i=0; i < participantes.length; i++ ){
            let amigoSecreto = definirAmigoSecreto(participantes);
            while (amigoSecreto == participantes[i] || sorteados.includes(amigoSecreto) == true || amigoSecreto == null ){
            amigoSecreto = definirAmigoSecreto(participantes);
            }
        sorteados.push(amigoSecreto);
        sorteio.push([`${participantes[i]} ---> ${amigoSecreto}`]); 
        };
        resultadoSorteio.innerHTML= `${sorteio} <br>`;
    }else{
        alert('É necessário no mínimo 4 participantes para realizar o sorteio');
    };
};


function reiniciar(){
    document.getElementById('lista-sorteio').innerHTML= '';
    participantes = [];
    sorteados = [];
    sorteio =[];
    participantesHTML.innerHTML = '';
};
