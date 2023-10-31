import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environment/environment.dev';
import { Observable } from 'rxjs';
import { DividaTecnica } from '../servicos/divida-tecnica/dividaTecnica';

@Injectable({
  providedIn: 'root'
})
export class DividaTecnicaService {
 

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient ) {}

  salvar( dividaTecnica: DividaTecnica ) : Observable<DividaTecnica> {
    return this.http.post<DividaTecnica>( `${this.apiURL}`, dividaTecnica);
  }

  atualizar( dividaTecnica: DividaTecnica ) : Observable<any> {
    return this.http.put<DividaTecnica>(`${this.apiURL}/${dividaTecnica.id}` , dividaTecnica);
  }

  getDividaTecnica() : Observable<DividaTecnica[]> {
    return this.http.get<DividaTecnica[]>(this.apiURL);
  }
  
  getDividaTecnicaById(id: number) : Observable<DividaTecnica> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(dividaTecnica: DividaTecnica) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${dividaTecnica.id}`);
  }
}
