function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Emite um alerta caso os campos não sejam preenchidos
    if(quantidade == '' || de == '' || ate == ''){

        alert('Favor, preencher os campos abaixo!');
        return;       
    }

    let sorteados = [];
    let numero;

     


    if(de > ate){

         alert('O número inicial deve ser menor que o número final!');
         reiniciar();
       
    } else{
        for (let i = 0; i < quantidade; i++){
        numero = obterNumerosAleatorios(de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumerosAleatorios(de, ate);
        }

        sorteados.push(numero);

        alterarStatusBotao();
       
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    }    
     
}



function obterNumerosAleatorios(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}