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
    const currentRoute = this.router.url;

    if (currentRoute !== '/home') {
      this.viewCart = !this.viewCart;
    }
  }

  salir(){
    this.router.navigate(['login']);
  }
  isHome(): boolean {
    return this.router.url === '/home';
  }
}
