import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Projeto } from '../servicos/projeto/projeto';
import { environment } from 'src/environment/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient ) {}

  salvar( projeto: Projeto ) : Observable<Projeto> {
    return this.http.post<Projeto>( `${this.apiURL}`, projeto);
  }

  atualizar( projeto: Projeto ) : Observable<any> {
    return this.http.put<Projeto>(`${this.apiURL}/${projeto.id}` , projeto);
  }

  getProjetos() : Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiURL);
  }
  
  getProjetoById(id: number) : Observable<Projeto> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(projeto: Projeto) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${projeto.id}`);
  }
}
