import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { DividaTecnicaService } from 'src/app/service/divida-tecnica.service';
import { DividaTecnica } from './dividaTecnica';
import { Observable } from 'rxjs';
import { StatusDaFaseDeGerenciamentoDT } from './statusDaFaseDeGerenciamentoDT';
import { StatusDoPagamentoDT } from './statusDoPagamentoDT';

@Component({
  selector: 'app-divida-tecnica',
  templateUrl: './divida-tecnica.component.html',
  styleUrls: ['./divida-tecnica.component.css']
})
export class DividaTecnicaComponent implements OnInit {
  dividaTecnica: DividaTecnica = new DividaTecnica(); // Certifique-se de definir o tipo correto
  success: boolean = false;
  errors: string[] = [];
  id!: number;
  activatedRoute: any;

  // Defina as enumerações diretamente aqui
  statusFaseEnum = StatusDaFaseDeGerenciamentoDT;
  statusPagamentoEnum = StatusDoPagamentoDT;

  constructor( 
    private service: DividaTecnicaService,
    private router: Router,
    // private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
        this.id = urlParams['id'];
        if (this.id) {
          this.service
            .getDividaTecnicaById(this.id)
            .subscribe( 
              response => this.dividaTecnica = response,
              errorResponse => this.dividaTecnica = new DividaTecnica()
            );
        }
    });
  }

  voltarParaListagem(){
    // this.router.navigate(['/clientes/lista'])
  }

  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.dividaTecnica)
        .subscribe(response => {
            this.success = true;
            this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar a Dívida Técnica.'];
        });
    } else {
      this.service
        .salvar(this.dividaTecnica)
        .subscribe(response => {
            this.success = true;
            this.errors = [];
            this.dividaTecnica = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }
  }

  getEnumKeys(enumObj: any): string[] {
    return Object.values(enumObj);
  }
  
}
