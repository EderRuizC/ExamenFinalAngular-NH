import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CourseDestacadoContainerComponent } from './components/course-destacado-container/course-destacado-container.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructorService } from './services/instructor.service';
import { CursodestacadoService } from './services/cursodestacado.service';

@NgModule({
  declarations: [HomePageComponent, CourseDestacadoContainerComponent, HeaderComponent, InstructorComponent, InstructorContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  providers:[InstructorService, CursodestacadoService]
})
export class HomeModule { }
