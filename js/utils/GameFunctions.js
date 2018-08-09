//Cria o jogador
function criarJogador() {
    confirmaNome.addEventListener('click', () => {
        if(!(validarNome(gameInput.value))) {
            gameInput.value = '';
            gameInput.focus();
            return false;
        } else {
            jogador.nome = gameInput.value;
        }

        guiRolarAtributos();
        distribuirAtributos();
        
        console.log(jogador);

        guiPreCombate();
    });
}
