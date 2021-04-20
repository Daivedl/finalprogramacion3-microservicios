import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_ENDPOINT } from '../config/app';
import { Asignatura } from '../models/asignatura';
import { Examen } from '../models/examen';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends CommonService<Examen>{

  protected baseEndpoint = BASE_ENDPOINT + '/examenes';

  constructor(httpClient: HttpClient) { 
    super(httpClient);
  }
  public findAllAsignatura(): Observable<Asignatura[]>{
    return this.httpClient.get<Asignatura[]>(`${this.baseEndpoint}/asignaturas`);
  }

  public filtrarPorNombre(nombre: String): Observable<Examen[]>{
    return this.httpClient.get<Examen[]>(`${this.baseEndpoint}/filtrar/${nombre}`);
  }
}
