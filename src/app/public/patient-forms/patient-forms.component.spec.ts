import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormsComponent } from './patient-forms.component';

describe('PatientFormsComponent', () => {
  let component: PatientFormsComponent;
  let fixture: ComponentFixture<PatientFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
