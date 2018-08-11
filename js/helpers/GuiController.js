
//Ajusta UI - Começo de jogo
function guiEscolherNome() {
    newGame.classList.add('vanish');
    gameOutput.innerText = ('Qual seu nome aventureiro?');
    gameInput.classList.remove('vanish');
    gameInput.focus();
    confirmaNome.classList.remove('vanish');
}

function guiRolarAtributos() {
    gameInput.classList.add('vanish');
    confirmaNome.classList.add('vanish');
}

function guiPreCombate() {
    iniciarCombate.classList.remove('vanish');
}

function guiCombate() {
    atualizaVida();
    iniciarCombate.classList.add('vanish');
    healthBar.classList.remove('vanish');
}

function guiGameOver() {
    healthBar.classList.add('vanish');
    newGame.classList.remove('vanish');
}

function displayAtributos(nome, forca, destreza, constituicao) {
    gameOutput.innerText = ("Nome: " + nome);
    gameOutput.innerText += ("\nForça: " + forca);
    gameOutput.innerText += ("\nDestreza: " + destreza);
    gameOutput.innerText += ("\nConstituição: " + constituicao);
}

function displayAtaque(agressor, alvo, sucesso) {
    let golpe;
    if(sucesso) {
        golpe = "acertou!"
    } else {
        golpe = "errou!"
    }
    gameOutput.innerText = agressor.nome + " atacou " +  alvo.nome + " e " + golpe;
}

function displayDano(agressor, alvo, dano) {
    gameOutput.innerText += "\n\n" + agressor.nome + " causou " + dano + " ao " + alvo.nome;
}