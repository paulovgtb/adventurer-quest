
class Monstro extends Personagem {

    constructor(nome, forca, destreza, constituicao, tamanho, modificadorDeClasseDeArmadura, arma, quantidadeDeDadosDeVida, tipoDeDadoDeVida, modificadorDeVida, modificadorDeAcerto, experiencia) {
        super(nome, 'monstro', forca, destreza, constituicao, tamanho, arma);
        this.modificadorDeClasseDeArmadura = modificadorDeClasseDeArmadura;
        this.quantidadeDeDadosDeVida = quantidadeDeDadosDeVida;
        this.tipoDeDadoDeVida = tipoDeDadoDeVida;
        this.modificadorDeVida = modificadorDeVida;
        this.modificadorDeAcerto = modificadorDeAcerto;
        this.vida = calcularVida(this.classe, this.modificadorDeConstituicao, quantidadeDeDadosDeVida, tipoDeDadoDeVida, modificadorDeVida);
        this.classeDeArmadura = calcularClasseDeArmadura(this.modificadorDeDestreza, modificadorDeClasseDeArmadura);
        this.experiencia = experiencia;
    }
}
