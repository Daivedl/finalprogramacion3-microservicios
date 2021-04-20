import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_ENDPOINT } from '../config/app';
import { Alumno } from '../models/alumno';
import { Curso } from '../models/curso';
import { Examen } from '../models/examen';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends CommonService<Curso>{
  

    protected baseEndpoint = BASE_ENDPOINT + '/cursos';

    constructor(httpClient: HttpClient) { 
      super(httpClient);
    }

    asignarAlumnos(curso: Curso, alumnos: Alumno[]): Observable<Curso>{
      return this.httpClient.put<Curso>(`${this.baseEndpoint}/${curso.id}/asignar-alumnos`, alumnos,
      {headers: this.cabeceras});
    }

    eliminarAlumno(curso: Curso, alumno: Alumno): Observable<Curso>{
      return this.httpClient.put<Curso>(`${this.baseEndpoint}/${curso.id}/eliminar-alumno`,
      alumno, {
        headers: this.cabeceras
      });
    }
    asignarExamenes(curso: Curso, examenes: Examen[]): Observable<Curso>{
      return this.httpClient.put<Curso>(`${this.baseEndpoint}/${curso.id}/asignar-examenes`,
      examenes, {
        headers: this.cabeceras //cabeceras envia la info como json 
      });
    }
    eliminarExamen(curso: Curso, examen: Examen): Observable<Curso>{
      return this.httpClient.put<Curso>(`${this.baseEndpoint}/${curso.id}/eliminar-examen`,
      examen, {
        headers: this.cabeceras
      });
    }
    obtenerCursoPorAlumnoId(alumno: Alumno): Observable<Curso>{
      return this.httpClient.get<Curso>(`${this.baseEndpoint}/alumno/${alumno.id}`);
    }
}
