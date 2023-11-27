import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObtenerTicket } from 'src/app/interfaces/obtener.model';
import { CrearService } from 'src/app/services/crear.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.scss']
})
export class UsuarioEditarComponent {
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
