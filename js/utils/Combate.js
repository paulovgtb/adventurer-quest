
//Rola o dano causado pelo personagem
async function causarDano(personagem, alvo, acertoEhCritico) {
    let modificadorDeHabilidade = 0;
    let dano;
    let dados = 0;

    switch(personagem.arma.alcance) {
        case 'curto':
            modificadorDeHabilidade = personagem.modificadorDeForca;
            break;
        case 'distancia':
            modificadorDeHabilidade = personagem.modificadorDeDestreza;
            break;
    }

    for(i = 0; i < personagem.arma.quantidadeDeDadosDeAtaque; i++) {
        dados += rolarDado(personagem.arma.tipoDeDadoDeAtaque);
    }

    dano = (dados + modificadorDeHabilidade) * acertoEhCritico;
    await sleep(1000);
    displayDano(personagem, alvo, dano);
    alvo.danoSofrido += dano;
    atualizaVida();
}

//Calcula a iniciativa do personagem
function calcularIniciativa(personagem) {
    let modificadorDeIniciativa = 0;
    switch(personagem.tamanho) {
        case 'miudo':
            modificadorDeIniciativa = 5;
        case 'pequeno':
            modificadorDeIniciativa = 2;
        case 'medio':
            modificadorDeIniciativa = 0;
        case 'grande':
            retmodificadorDeIniciativa = -2;
        case 'enorme':
            modificadorDeIniciativa = -5;
        case 'gigante':
            modificadorDeIniciativa = -8;
    }

    return modificadorDeIniciativa + rolarDado(20);
}

//Seleciona o monstro a ser enfrentado
function sorteiaMonstro() {
    let monstroAleatorio = monstrosND1.sort(function(a, b) { return 0.5 - Math.random()});
    return monstroAleatorio[0];
}

//Confere se o alvo ainda vive
function isAlvoVivo(alvo) {
    if(alvo.danoSofrido < alvo.vida) {
        return true;
    }

    return false;
}

//Confere se o alvo é o jogador
function isAlvoJogador(alvo) {
    if(alvo.nome == jogador.nome) {
        return true;
    }

    return false;
}

//Prepara para o combate
function preCombate(jogador) {
    let monstro = sorteiaMonstro();
    let ordemDeCombate = [];

    while(true) {
        if(calcularIniciativa(jogador) > calcularIniciativa(monstro)) {
            ordemDeCombate.push(jogador);
            ordemDeCombate.push(monstro);
            break;
        } else if(calcularIniciativa(jogador) < calcularIniciativa(monstro)) {
            ordemDeCombate.push(monstro);
            ordemDeCombate.push(jogador);
            break;
        }
    }
    
    return ordemDeCombate;
}

async function combate() {
    guiCombate();
    let personagem;
    let agressor;
    let alvo;
    let isJogadorVivo = true;
    
    while(true) {
        personagem = preCombate(jogador);
        agressor = 2;
        alvo = 3;

        while(true) {
            personagem[agressor%2].atacar(personagem[alvo%2], personagem[alvo%2].modificadorDeAcerto);
    
            if(!(isAlvoVivo(personagem[alvo%2]))) {                    
                console.log(personagem[alvo%2].nome + " morreu.");
                if(!(isAlvoJogador(personagem[alvo%2]))) {
                    personagem[alvo%2].danoSofrido = 0;
                    jogador.experiencia += personagem[alvo%2].experiencia;
                } else {
                    isJogadorVivo = false;
                    personagem[agressor%2].danoSofrido = 0;
                }

                break;
            }
            
            agressor++;
            alvo++;
            await sleep(2000);
        }

        if(!isJogadorVivo) {
            guiGameOver();
            break;
        }
    }
}