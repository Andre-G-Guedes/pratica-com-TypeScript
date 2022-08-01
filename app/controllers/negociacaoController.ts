import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesListas } from "../models/negociacoesListas.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesListasView } from "../views/negociacoesListas-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoesListas = new NegociacoesListas();
    private negocicoesListasView = new NegociacoesListasView('#negociacoesListasview',true);
    private mensagemView = new MensagemView('#mensagemView');   

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negocicoesListasView.update(this.negociacoesListas);
    }

    public adiciona(): void {
        const negociacao = Negociacoes.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

            if(!this.ehDiaUtil(negociacao.data)) {
                this.mensagemView.update('Apenas negociações são aceitas em dias úteis.')
                return;
            }

            this.negociacoesListas.adiciona(negociacao);        
            this.limpaFormulario();
            this.atualizaView();       
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
  
    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negocicoesListasView.update(this.negociacoesListas);
        this.mensagemView.update('Negociação adicionada com sucesso!')
    }
}