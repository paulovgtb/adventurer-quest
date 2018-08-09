
//Cria a ficha do jogador
function criarJogador() {
    if(!(validarNome(gameInput.value))) {
        gameInput.value = '';
        gameInput.focus();
        return false;
    }

    jogador.nome = gameInput.value;
    guiRolarAtributos();
    distribuirAtributos();
    guiPreCombate();
}

//Calcula a vida inicial do personagem
function calcularVida(classe, modificadorDeConstituicao, quantidadeDeDadosDeVida, tipoDeDadoDeVida, modificadorDeVida) {
    switch(classe) {
        case 'guerreiro':
        case 'ranger':
            return 10 + modificadorDeConstituicao;
        case 'sorcerer':
            return 6 + modificadorDeConstituicao;
        default:
            let dados = 0;
            for(i = 0; i < quantidadeDeDadosDeVida; i++) {
                dados += rolarDado(tipoDeDadoDeVida);
            }

            return dados + modificadorDeConstituicao + modificadorDeVida; 
    }
}

//Rola o atributo de um personagem, usado na criação da ficha
//Regra: Joga-se 4 dados de 6 lados, exclui o com menor valor e soma o restante
function rolarAtributo() {
    let dados = [];
    let atributo = 0;
    
    for(let i = 0; i < 4; i++) {
        dados.push(rolarDado(6));
    }

    dados.sort().shift()
    dados.forEach((dado) => {
        atributo += dado;
    })

    return atributo;
}

//Rola os atributos do jogador
function distribuirAtributos() {
        gameOutput.innerText = (jogador.nome + ":");
        jogador.forca = rolarAtributo();
        jogador.atualizarModificador('forca', jogador.forca);
        gameOutput.innerText += ("\nForça: " + jogador.forca);
        jogador.destreza = rolarAtributo();
        jogador.atualizarModificador('destreza', jogador.destreza);
        gameOutput.innerText += ("\nDestreza: " + jogador.destreza);
        jogador.constituicao = rolarAtributo();
        jogador.atualizarModificador('constituicao', jogador.constituicao);
        gameOutput.innerText += ("\nConstituição: " + jogador.constituicao);
}

//Calcula o modificador dos atributos
function calcularModificador(atributoDoPersonagem) {
    switch(atributoDoPersonagem) {
        case 1:
            return -5;
        case 2:
        case 3:
            return -4;
        case 4:
        case 5:
            return -3;
        case 6:
        case 7:
            return -2;
        case 8:
        case 9:
            return -1;
        case 10:
        case 11:
            return 0;
        case 12:
        case 13:
            return 1;
        case 14:
        case 15:
            return 2;
        case 16:
        case 17:
            return 3;
        case 18:
        case 19:
            return 4;
        case 20:
            return 5;
        case 21:
            return 6;
        case 22:
            return 7;
        case 23:
            return 8;
        case 24:
            return 9
        case 25:
            return 10;
    }
}

//Calcula a classe de armadura do personagem
function calcularClasseDeArmadura(modificadorDeDestreza, modificadorDeClasseDeArmadura) {
    return 10 + modificadorDeDestreza + (modificadorDeClasseDeArmadura || 0);
}   
