 export class Negociacoes {   
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume():number {
        return this._quantidade * this._valor
    }

    public static criaDe(dataSring: string,quantidadeString: string,valorString: string) {
        const exp =/-/g;
        const data = new Date(dataSring.replace(exp,','))
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacoes(data,quantidade,valor);
    }
}