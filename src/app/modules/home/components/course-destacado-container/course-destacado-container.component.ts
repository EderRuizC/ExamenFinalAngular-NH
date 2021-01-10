import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-destacado-container',
  templateUrl: './course-destacado-container.component.html',
  styleUrls: ['./course-destacado-container.component.scss']
})
export class CourseDestacadoContainerComponent implements OnInit {

  listarCursoDestacado: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
