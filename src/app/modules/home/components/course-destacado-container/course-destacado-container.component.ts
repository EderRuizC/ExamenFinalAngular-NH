import { Component, OnInit } from '@angular/core';
import { ICurso } from '../../../../shared/Interfaces/Course';

@Component({
  selector: 'app-course-destacado-container',
  templateUrl: './course-destacado-container.component.html',
  styleUrls: ['./course-destacado-container.component.scss']
})
export class CourseDestacadoContainerComponent implements OnInit {

  listarCursoDestacado: ICurso[] = [{id: 1,
    name: 'Angular 10',
    featured: true,
    image: 'http://examen-nh.jcramireztello.com/media/books/angular10.png',
    language: 'es',
    price: 5000.0,
    duration: 40,
    lessons: 7,
    deadline: '2021-01-09',
    students: 20,
    summary: 'Angular es el framework para JavaScript estándapulares para dilarJS. Ahora utilizaremos TypeScel framework.',
    instructor: 1,
    category: 2}];

  constructor() { }

  ngOnInit(): void {
  }

}
