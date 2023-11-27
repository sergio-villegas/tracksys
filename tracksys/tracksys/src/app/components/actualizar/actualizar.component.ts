import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObtenerTicket } from 'src/app/interfaces/obtener.model';
import { CrearService } from 'src/app/services/crear.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent {
  ticket = new ObtenerTicket ("","","","","","");
  id = ''
  constructor(
    private crearService: CrearService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    if(this.id){
      this.crearService.getIDTicket(this.id).subscribe(data => {
        this.ticket = data[0]
      })
    }
  }
  onSubmit(){
    if(this.id){
      this.crearService.updateTicket(this.ticket).subscribe(data => {
        alert(data)
        this.router.navigate(['admin'])
      })
    }
  }

  updateInputValue(event: any): void {
    this.ticket.estado = event.target.value;
  }
}
