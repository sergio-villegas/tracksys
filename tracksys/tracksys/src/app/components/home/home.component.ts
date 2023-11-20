import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
=======
import { Data } from 'src/app/interfaces/data';
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
<<<<<<< HEAD
  tickets: Ticket[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router
  ){}

  ngOnInit(){
    this.homeService.getAllTicket().subscribe((data) => {
=======
  tickets: Data[] = []

  constructor(
    private homeService: HomeService
  ){}

  ngOnInit(){
    this.homeService.getAlltickets().subscribe((data) => {
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d
      this.tickets = data;
    })
  }
}
