import { Negociacoes } from "./negociacoes.js";

export class NegociacoesListas {
    private negociacoeslistas: Array<Negociacoes> = [];

    public adiciona(negociacoes: Negociacoes) {
        this.negociacoeslistas.push(negociacoes);
    }

    public lista(): readonly Negociacoes[] {
        return this.negociacoeslistas;
    }
}
