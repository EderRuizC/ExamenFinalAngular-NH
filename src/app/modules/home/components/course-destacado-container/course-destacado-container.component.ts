import { Component, OnInit } from '@angular/core';
import { ICurso } from '../../../../shared/Interfaces/Course';
import { CursodestacadoService } from '../../services/cursodestacado.service';

@Component({
  selector: 'app-course-destacado-container',
  templateUrl: './course-destacado-container.component.html',
  styleUrls: ['./course-destacado-container.component.scss']
})
export class CourseDestacadoContainerComponent implements OnInit {

  listarCurso: ICurso[] = [];

  constructor(private cursodestservicio: CursodestacadoService ) { 
  }

  ngOnInit(): void {
    this.getinstructor();
  }

  getinstructor() {
    this.cursodestservicio.getinstructor()
      .subscribe((res: ICurso[]) => {
        this.listarCurso = res;
      }
      );
  }

}
