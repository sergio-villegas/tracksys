import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL = 'http://localhost:3000'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAlltickets(): Observable<Data[]>{
    const response = this.httpClient.get<Data[]>(this.BASE_URL+'/tareas')
    return response
  }
  crearTicket(){
    return this.httpClient.post<string>(this.BASE_URL+'/tareas/agregar', String)
  }
}
