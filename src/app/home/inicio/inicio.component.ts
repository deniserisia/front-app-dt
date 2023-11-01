import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DividaTecnicaService } from 'src/app/service/divida-tecnica.service';
import { ProjetoService } from 'src/app/service/projeto.service';
import { DividaTecnica } from 'src/app/servicos/divida-tecnica/dividaTecnica';
import { Projeto } from 'src/app/servicos/projeto/projeto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  projetos: Projeto[] = [];
  dividasTecnicas: DividaTecnica[] = [];
  dividaSelecionada!: DividaTecnica;
  projetoSelecionado!: Projeto;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: ProjetoService,
    private serviceD: DividaTecnicaService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getProjetos()
      .subscribe( resposta => this.projetos = resposta )
      this.serviceD
      .getDividaTecnica()
      .subscribe( resposta => this.dividasTecnicas = resposta);
  }

  consultar(){
   
  }

  novoCadastro(){
    this.router.navigate(['/serviçoes/projeto'])
  }

  preparaDelecao(projeto: Projeto){
    this.projetoSelecionado = projeto;
  }

  preparaDelecaoDT(dividasTecnicas: DividaTecnica){
    this.dividaSelecionada = dividasTecnicas;
  }

  deletarProjeto(){
    this.service
      .deletar(this.projetoSelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Projeto deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o projeto.'  
      )
  }

  deletarDT(){
    this.serviceD
      .deletar(this.dividaSelecionada)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'DT deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o DT.'  
      )
  }
}
