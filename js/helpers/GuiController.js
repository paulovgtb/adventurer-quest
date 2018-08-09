
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

function guiGameOver() {
    newGame.classList.remove('vanish');
}
