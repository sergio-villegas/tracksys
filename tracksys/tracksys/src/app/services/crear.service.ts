import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearService {
  BASE_URL = 'http://localhost:3000'
  constructor(
    private httpClient: HttpClient
  ) { }

  crearTicket(ticket: Ticket){
    return this.httpClient.post<string>(this.BASE_URL+'/tareas/crear', ticket)
  }
  updateTicket(ticket: Ticket){
    return this.httpClient.put<string>(`${this.BASE_URL}/tareas/actualizar/${ticket.id_tarea}`, ticket);
  }
  getIDTicket(id: string): Observable<Ticket[]>{
    const response = this.httpClient.get<Ticket[]>(this.BASE_URL+`/tareas/ver/${id}`);
    return response
  }
}
