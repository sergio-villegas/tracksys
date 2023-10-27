import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

type NewType = JwtHelperService;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  singin(usuario:any){
    return this.http.post(`${this.URL}/singin`,usuario);
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

}
