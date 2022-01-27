//Classe Abstrata
export class Conta{
    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar objetos do tipo Conta, pois a classe é abstrata!");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    //Assessores
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Métodos
    sacar(valor){
        throw new Error("O método sacar é abstrato!")
    }

    _sacar(valor, taxa){
        valor *= taxa;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }   
        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorTransferir = this.sacar(valor);
        conta.depositar(valorTransferir);
    }
}