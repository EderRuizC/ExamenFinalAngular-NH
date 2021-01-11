import { Component, OnInit } from '@angular/core';
import { IInstructor } from '../instructor/Interfaces/Instructor';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.scss']
})
export class InstructorContainerComponent implements OnInit {

  listarInstructor: IInstructor[] = [];

  constructor(private instructorservicio: InstructorService ) { 
  }

  ngOnInit(): void {
    this.getinstructor();
  }

  getinstructor() {
    this.instructorservicio.getinstructor()
      .subscribe((res: IInstructor[]) => {
        this.listarInstructor = res;
      }
      );
  }


}
