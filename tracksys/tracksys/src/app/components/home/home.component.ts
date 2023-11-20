import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tickets: Ticket[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router
  ){}

  ngOnInit(){
    this.homeService.getAllTicket().subscribe((data) => {
      this.tickets = data;
    })
  }
}
