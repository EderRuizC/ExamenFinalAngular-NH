import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoriaContainerComponent } from './course-categoria-container.component';

describe('CourseCategoriaContainerComponent', () => {
  let component: CourseCategoriaContainerComponent;
  let fixture: ComponentFixture<CourseCategoriaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCategoriaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCategoriaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
