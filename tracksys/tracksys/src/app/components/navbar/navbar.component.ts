import { Component } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  viewCart: boolean = false;
  
  constructor(
    private homeService: HomeService
  ) { }

  clickShowLista(){
    this.viewCart = !this.viewCart
  }
  
}
