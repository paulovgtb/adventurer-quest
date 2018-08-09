
class Personagem {

    constructor(nome, classe, forca, destreza, constituicao, tamanho, arma) {
        this.nome = nome;
        this.classe = classe;
        this.forca = forca;
        this.destreza = destreza;
        this.constituicao = constituicao;
        this.tamanho = tamanho;
        this.arma = arma;
        this.modificadorDeForca = calcularModificador(this.forca);
        this.modificadorDeDestreza = calcularModificador(this.destreza);
        this.modificadorDeConstituicao = calcularModificador(this.constituicao);
        this.vida = calcularVida(this.classe, this.modificadorDeConstituicao);
        this.danoSofrido = 0;
        this.classeDeArmadura = calcularClasseDeArmadura(this.modificadorDeDestreza);
        this.experiencia = 0;
    }

    atualizarModificador(atributo, valor) {
        switch(atributo) {
            case 'forca':
                this.modificadorDeForca = calcularModificador(valor);
                break;
            case 'destreza':
                this.modificadorDeDestreza = calcularModificador(valor);
                break;
            case 'constituicao':
                this.modificadorDeConstituicao = calcularModificador(valor);
                break;
        }
    }

    atacar(alvo, modificadorDeAcerto) {
        let modificadorDeHabilidade = 0;
        let acertoEhCritico = 1;
        let d20 = rolarDado(20);
        console.log('d20: ' + d20);

        if(d20 === 20) {
            acertoEhCritico = 2;
            causarDano(this, alvo, acertoEhCritico);
            return true;
        } else if(d20 === 1) {
            return false;
        } else {
            switch(this.arma.alcance) {
                case 'curto':
                    modificadorDeHabilidade = this.modificadorDeForca;
                    break;
                case 'distancia':
                    modificadorDeHabilidade = this.modificadorDeDestreza;
                    break;
            }
            console.log('MdH: ' + modificadorDeHabilidade);
            console.log('AlvoCA: ' + alvo.classeDeArmadura);
            console.log('this: ' + this);
            console.log('Alvo: ' + alvo);
            console.log('MdAcerto: ' + modificadorDeAcerto || 0);
            if(d20 + modificadorDeHabilidade + (modificadorDeAcerto || 0) >= alvo.classeDeArmadura) {
                causarDano(this, alvo, acertoEhCritico);
                return true;
            } else {
                return false;
            }
        }
    }
}
