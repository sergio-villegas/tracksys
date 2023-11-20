import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = { usuario: '', password: '' };

  // Especifica la posición del mensaje emergente
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  login() {
    console.log(this.user);

    this.loginService.singin(this.user).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['home']);
      },
      (error) => {
        console.error(error);

        if (error.status === 401) {
          // Manejo específico para código de estado 401 (No autorizado)
          this.mostrarMensaje('Credenciales incorrectas. Verifica tu usuario y contraseña.');
        } else {
          // Otros errores
          this.mostrarMensaje('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
        }
      }
    );
  }

<<<<<<< HEAD
  ngOnInit(){

  }
  login(){
    console.log(this.user)
    this.loginService.singin(this.user).subscribe( (res:any) => {
      console.log(res);
      localStorage.setItem('token',res.token);
      
      this.router.navigate(['admin'])
    })
=======
  private mostrarMensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d
  }
}
