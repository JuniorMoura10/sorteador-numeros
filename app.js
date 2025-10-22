/**
 * O programa sorteia números aleatórios, onde o usuário pode definir a quantidade de números a serem sorteados
 * e em qual intervalo de números ele deseja obtê-los. 
 */
//declaração da função principal (sortear) e variáveis
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Emite um alerta caso os campos não sejam preenchidos
    if(isNaN(quantidade) || isNaN(de) || isNaN(ate)){

        alert('Favor, preencher os campos abaixo!');
        return;       
    }

    // Array para guardar os números sorteados
    let sorteados = [];
    // número efetivamente sorteado
    let numero;

     

    /**
     * Esta validação confere se o número inicial é menor que o número final. Em caso negatico, o programa emite um alerta ao 
     * usuário e solicita a correção. Em caso positivo, o programa executa normalmente, fazendo o sorteio dos números.
     */
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
       
    }

    //Chamada da função que ativa o botão reiniciar após a execução do programa
     alterarStatusBotao();
    // Este trecho do código trabalha a frase que apresenta os números sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    }    
     
}


//Declaração das demais funções
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