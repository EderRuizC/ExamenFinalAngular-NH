import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sharedcourse',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() curso: any[] = [];
  @Input() coverWidth: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
