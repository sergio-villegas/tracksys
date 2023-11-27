import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL = 'http://localhost:3000'
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTicket(): Observable<Ticket[]>{
    const response = this.httpClient.get<Ticket[]>(this.BASE_URL+'/tareas');
    return response;
  }
  getIDTicket(id: string): Observable<Ticket[]>{
    const response = this.httpClient.get<Ticket[]>(this.BASE_URL+`/tareas/ver/${id}`);
    return response
  }
}
