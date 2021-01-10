import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDestacadoContainerComponent } from './course-destacado-container.component';

describe('CourseDestacadoContainerComponent', () => {
  let component: CourseDestacadoContainerComponent;
  let fixture: ComponentFixture<CourseDestacadoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDestacadoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDestacadoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
