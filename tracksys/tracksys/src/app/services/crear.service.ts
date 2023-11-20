import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket';

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
}
