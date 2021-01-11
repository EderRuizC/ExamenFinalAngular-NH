import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from './Interfaces/Instructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  @Input()
  instructor!: IInstructor;

  constructor( ) {}

  ngOnInit(): void {
  }

}
