import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInformationComponent } from './patient-information.component';

describe('PatientInformationComponent', () => {
  let component: PatientInformationComponent;
  let fixture: ComponentFixture<PatientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientInformationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PatientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
