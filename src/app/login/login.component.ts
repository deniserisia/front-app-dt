import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  cadastrando!: boolean;
  mensagemSucesso!: string;
  errors!: string[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.authService
      .tentarLogar(this.username, this.password)
      .subscribe(response => {
        console.log("entrou")
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/home/inicio']);
      }, errorResponse => {
        console.log("error")
        this.errors = ['Usuário e/ou senha incorreto(s)'];
      })
  }

  preparaCadastrar(event: Event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
      .subscribe((response: any) => { // Adicionando tipo explícito 'any'
        this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login!"
        this.errors = [];
        this.cadastrando = false;
        this.username = '';
        this.password = '';
      }, errorResponse => {
        this.mensagemSucesso = '';
        this.errors = errorResponse.error.errors;
        console.log("ERROS METODOS CADASTRAR: ", errorResponse)
      })
  }
}
