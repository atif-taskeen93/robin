import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';


@NgModule({
  declarations: [
    BasicInformationComponent,
    CalendarComponent,
    PatientInformationComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
