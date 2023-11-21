import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
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
