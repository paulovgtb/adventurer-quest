
//Simula a rolagem de um dado
function rolarDado(numeroDeLados) {
    return Math.floor((Math.random() * numeroDeLados) + 1);
}

//Da experiência para o jogador
function ganharExperiencia(jogador, monstro) {
    jogador.experiencia += monstro.experiencia;
}

//Adiciona uma arma ao personagem
function ganharArma(jogador, arma) {
    jogador.arma.push(arma);
}

//Valida nome do jogador
function validarNome(nome) {
    if(nome.trim() == '') {
        alert('Nome inválido!');
        return false;
    };
    
    return true;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function atualizaVida() {
    healthBar.innerText = jogador.vida - jogador.danoSofrido;
}