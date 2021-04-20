import { Component, Inject, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CommonService } from 'src/app/services/common.service';
import { CursoService } from 'src/app/services/curso.service';
import { CommonListarComponent } from '../common-listar.component';
@Inject(CommonService) 
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent extends CommonListarComponent<Curso, CursoService> implements OnInit {

  constructor(service: CursoService) {
    super(service);
    this.titulo = 'Listado de cursos';
    this.nombreModel = Curso.name;
   }

  

}
