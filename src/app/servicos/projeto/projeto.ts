import { DividaTecnica } from "../divida-tecnica/dividaTecnica";
import { StatusProjeto } from "./statusProjeto";

export class Projeto {
    id!: string;
    nomeDoProjeto!: string;
    descricao!: string;
    setor!: string;
    empresa!: string;
    nomeDoLiderDoProjeto!: string;
    dataDeInicioDoProjeto!: string;
    statusProjeto!: StatusProjeto ; // Pode ser um enum em TypeScript, se necessário
    idUser!: string;
    diaDoCadastro!: string; // Deve ser formatado como string de data
    // Você pode incluir um array de DividaTecnica, se necessário
    //dividasTecnicas!: DividaTecnica[];
  }
  