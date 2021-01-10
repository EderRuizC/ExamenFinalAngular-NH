import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { CourseComponent } from './components/course/course.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';


@NgModule({
  declarations: [ CoursePageComponent, CourseContainerComponent, CourseComponent,
     InstructorComponent, InstructorContainerComponent, CourseDetailPageComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
