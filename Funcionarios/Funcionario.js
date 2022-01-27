export class Funcionario{
    constructor(cpf,nome,salario){
        this._cpf = cpf;
        this.nome = nome;
        this.salario = salario;

        this._bonificacao = 1;
        this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return this._senha == senha;
    }
}