import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor(12345678900, "Roberto", 12000);
diretor.cadastrarSenha("aaa111");
const gerente = new Gerente(12378945601, "Rogério", 80000);
gerente.cadastrarSenha("bbb222");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "aaa111");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "bbb222");

const cliente = new Cliente("Adriano", 98765432102, "ccc333");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "ccc333");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);