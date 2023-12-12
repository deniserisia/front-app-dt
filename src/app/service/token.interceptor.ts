import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenString = localStorage.getItem('access_token');
    const url = request.url;

    console.log("inicio do token")
    if( tokenString && !url.endsWith('/oauth/token') ){
      console.log("entrou token")
      const token = JSON.parse(tokenString);
      const jwt = token.access_token;
      request = request.clone({
        setHeaders : {
          Authorization: 'Bearer ' + jwt
        }
      })
    }
    console.log("fim do token")
    return next.handle(request);
  }
}