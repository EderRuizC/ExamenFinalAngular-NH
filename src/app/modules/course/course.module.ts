import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CourseCategoriaContainerComponent } from './components/course-categoria-container/course-categoria-container.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ CoursePageComponent, CourseContainerComponent, CourseDetailPageComponent, CourseCategoriaContainerComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
