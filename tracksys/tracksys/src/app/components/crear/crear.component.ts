import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { CrearService } from 'src/app/services/crear.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {

  ticket: Ticket = {
    descripcion: '',
    localizacion: '',
    fechaini: '',
    fechafin: '',
    estado: '',
    archivo: ''
  }
  constructor(
    private crearService: CrearService,
    private router: Router
  ){}

  

  crearTicket(){
    this.crearService.crearTicket(this.ticket).subscribe(data => {
      alert(data)

    })  
  }
}
