import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../../../shared/Interfaces/Course';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {
  
  listarCurso = [];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
