import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesListas } from "../models/negociacoesListas.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesListasView } from "../views/negociacoesListas-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesListas = new NegociacoesListas();
        this.negocicoesListasView = new NegociacoesListasView('#negociacoesListasview', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negocicoesListasView.update(this.negociacoesListas);
    }
    adiciona() {
        const negociacao = Negociacoes.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações são aceitas em dias úteis.');
            return;
        }
        this.negociacoesListas.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negocicoesListasView.update(this.negociacoesListas);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
