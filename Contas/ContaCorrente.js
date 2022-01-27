import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    //Atributos
    static numeroDeContas = 0;

    //Construtor
    constructor(agencia, cliente){
        super(agencia,cliente,0);
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa)
    }
}