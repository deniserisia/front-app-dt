import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginError!: boolean;
  cadastrando!: boolean;
  mensagemSucesso!: string;
  errors!: String[];

  constructor(
    private router: Router
  ){}

  onSubmit(){

  }
  
  cancelaCadastro(){
    this.cadastrando = false;
  }

}
