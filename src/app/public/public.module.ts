import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PublicRoutingModule } from './public-routing.module';
import { PatientIdentityComponent } from './patient-identity/patient-identity.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { TimeCounterComponent } from '../components/time-counter/time-counter.component';
import { InsuranceInformationComponent } from './insurance-information/insurance-information.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { SexualHealthComponent } from './sexual-health/sexual-health.component';
import { PatientFormsComponent } from './patient-forms/patient-forms.component';

@NgModule({
  declarations: [
    PatientIdentityComponent,
    BasicInformationComponent,
    TimeCounterComponent,
    InsuranceInformationComponent,
    MedicalHistoryComponent,
    SexualHealthComponent,
    PatientFormsComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
})
export class PublicModule {}
