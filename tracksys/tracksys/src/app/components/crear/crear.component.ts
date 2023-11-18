import { Component } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { HomeService } from 'src/app/services/home.service';
import { ticket } from 'src/model/ticket.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {

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
  }
}
