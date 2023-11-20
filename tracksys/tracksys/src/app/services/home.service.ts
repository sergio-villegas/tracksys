import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Ticket } from '../interfaces/ticket';
import { Observable } from 'rxjs';
=======
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL = 'http://localhost:3000'
<<<<<<< HEAD
=======

>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d
  constructor(
    private httpClient: HttpClient
  ) { }

<<<<<<< HEAD
  getAllTicket(): Observable<Ticket[]>{
    const response = this.httpClient.get<Ticket[]>(this.BASE_URL+'/tareas');
    return response;
=======
  getAlltickets(): Observable<Data[]>{
    const response = this.httpClient.get<Data[]>(this.BASE_URL+'/tareas')
    return response
  }
  crearTicket(){
    return this.httpClient.post<string>(this.BASE_URL+'/tareas/agregar', String)
>>>>>>> 91e2fde4beda5ea1099370ba94457a0545d5599d
  }
}
