import { Component, OnInit } from '@angular/core';
import { Projeto } from './projeto';
import { Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjetoService } from 'src/app/service/projeto.service';
import { StatusProjeto } from './statusProjeto';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent  implements OnInit {

  projeto!: Projeto;
  success: boolean = false;
  errors!: String[];
  id!: number;
  activatedRoute: any;
  statusProjeto = StatusProjeto;

  constructor( 
      private service: ProjetoService,
      private router: Router,
     // private activatedRoute : ActivatedRoute
      ) {
    this.projeto = new Projeto();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getProjetoById(this.id)
            .subscribe( 
              response => this.projeto = response ,
              errorResponse => this.projeto = new Projeto()
            )
        }
    })
  }

  voltarParaListagem(){
    //this.router.navigate(['/clientes/lista'])
  }

  onSubmit(){
    if(this.id){

      this.service
        .atualizar(this.projeto)
        .subscribe(response => {
            this.success = true;
            this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o Projeto.']
        })


    }else{

      this.service
        .salvar(this.projeto)
          .subscribe( response => {
            this.success = true;
            this.errors = [];
            this.projeto = response;
          } , errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })

    }

  }
  
  getEnumKeys(enumObj: any): string[] {
    return Object.values(enumObj);
  }

}
