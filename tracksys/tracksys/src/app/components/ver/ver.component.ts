import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ObtenerTicket } from 'src/app/interfaces/obtener.model';
import { Ticket } from 'src/app/interfaces/ticket';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent {
  tickets = new ObtenerTicket ("","","","","","")
  id = ''
  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    if(this.id){
      this.homeService.getIDTicket(this.id).subscribe(data => {
        console.log(this.tickets);
        this.tickets = data[0]
      })
    }
  }
}
