import { Component } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { CrearService } from 'src/app/services/crear.service';
import { HomeService } from 'src/app/services/home.service';
=======
import { Data } from 'src/app/interfaces/data';
import { HomeService } from 'src/app/services/home.service';
import { ticket } from 'src/model/ticket.model';
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {

<<<<<<< HEAD
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
=======
  ticket: ticket = {
    Descripcion: '',
    Localizacion: '',
    Fecha_Inicio: '',
    Fecha_Finalizacion: '',
    Estado: '',
    Carga_Archivo: ''
  }

  constructor(
    private homeService: HomeService
  ) { }

  crearTicket(){
    this.homeService.crearTicket().subscribe(data => {
      alert(data);
      console.log('Se inserto registro')
    })
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d
  }
}
