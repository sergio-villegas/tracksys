import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = {
    usuario: '',
    password: ''
  }
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }

  ngOnInit(){

  }
  login(){
    console.log(this.user)
    this.loginService.singin(this.user).subscribe( (res:any) => {
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['home'])
    })
  }
}
