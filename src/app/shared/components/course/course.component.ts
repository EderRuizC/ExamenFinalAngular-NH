import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../Interfaces/Course';

@Component({
  selector: 'app-sharedcourse',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input()
  curso!: ICurso;
 
  constructor() { }

  ngOnInit(): void {};
}
