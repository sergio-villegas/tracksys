import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  viewCart: boolean = false;
  
  constructor() { }

  clickShowLista(){
    this.viewCart = !this.viewCart
  }
}
