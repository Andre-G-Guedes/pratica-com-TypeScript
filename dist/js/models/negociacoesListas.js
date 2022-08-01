export class NegociacoesListas {
    constructor() {
        this.negociacoeslistas = [];
    }
    adiciona(negociacoes) {
        this.negociacoeslistas.push(negociacoes);
    }
    lista() {
        return this.negociacoeslistas;
    }
}
