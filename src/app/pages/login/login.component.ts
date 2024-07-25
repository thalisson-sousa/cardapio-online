import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  formLogin!: FormGroup;

  constructor( private formBuilder: FormBuilder, private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void{
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(){
    if(!this.formLogin.valid){
      return;
    }
    this.authService.Login(this.formLogin.getRawValue()).then(resposta => {
      this.route.navigate(['/admin'])
    },(error) => {
      alert('erro ao tentar fazer o login')
    })
  }

  LoginWithGoogle() {
    this.authService.LoginWithGoogle().then(response => {
      this.route.navigate([''])
    })
  }
}
