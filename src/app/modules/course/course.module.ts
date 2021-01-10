import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './pages/course/course.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';


@NgModule({
  declarations: [CourseComponent, CoursePageComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
