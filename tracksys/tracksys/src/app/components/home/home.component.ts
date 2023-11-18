import { Component } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tickets: Data[] = []

  constructor(
    private homeService: HomeService
  ){}

  ngOnInit(){
    this.homeService.getAlltickets().subscribe((data) => {
      this.tickets = data;
    })
  }
}
