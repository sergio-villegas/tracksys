import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    public router: Router
  ){}
  canActivate(route: ActivatedRouteSnapshot): boolean{
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const usuarioRol = decodedToken.rol;

      console.log('Rol del usuario:', usuarioRol);
      
      if(!this.loginService.isAuth() || usuarioRol == 'user'){
        this.router.navigate(['/home'])
      }
      
    
    }
    return true;
  }
  
}
