import { Negociacoes } from "../models/negociacoes";
import { NegociacoesListas } from "../models/negociacoesListas.js";
import { View } from "./View.js";

export class NegociacoesListasView extends View<NegociacoesListas> {

   protected template(model: NegociacoesListas): string {
        return `
        <table class="table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${model.lista().map(negociacao =>{
                return `
                <tr>
                    <td>${this.dataformatada(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
                `;
            }).join('')}
            </tbody>
        </table> 
        `;
    }

    public update(model: NegociacoesListas): void {
        const template = this.template(model);
        console.log(template)
        this.elemento.innerHTML = template;
    }

    private dataformatada(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}