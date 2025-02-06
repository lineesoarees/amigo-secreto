let participantes = [];
let sorteados = [];
let sorteio =[];
let participantesHTML = document.getElementById('lista-amigos');


function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    participantes.push(amigo.value);
    participantesHTML.innerHTML = participantes;
    amigo.value = '';
};

/*function remover(){
    let amigoRemovido = participantesHTML.click;
    participantes = participantes.filter(amigoRemovido.value);
    participantesHTML.innerHTML = participantes;
};*/

function definirAmigoSecreto(lista){
    let nomeAmigoSorteado = lista[parseInt(Math.random()*lista.length)];
    return nomeAmigoSorteado;
};


function sortear(){
    let resultadoSorteio = document.getElementById('lista-sorteio');
    for(i=0; i < participantes.length; i++ ){
    let amigoSecreto = definirAmigoSecreto(participantes);
    while (amigoSecreto == participantes[i] || sorteados.includes(amigoSecreto) == true || amigoSecreto == null ){
        amigoSecreto = definirAmigoSecreto(participantes);
    }
    sorteados.push(amigoSecreto);
    sorteio.push([`${participantes[i]} ---> ${amigoSecreto}`]); 
    };
    resultadoSorteio.innerHTML= `${sorteio} <br>`;
};


function reiniciar(){
    document.getElementById('lista-sorteio').innerHTML= '';
    participantes = [];
    sorteados = [];
    sorteio =[];
    participantesHTML.innerHTML = '';
};
