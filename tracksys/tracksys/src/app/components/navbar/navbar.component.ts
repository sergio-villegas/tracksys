import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  viewCart: boolean = false;
  
  constructor(
    private router: Router
  ) { }

  clickShowLista(){
    this.viewCart = !this.viewCart
  }
  salir(){
    this.router.navigate(['login'])
  }
}
