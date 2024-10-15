import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { PrivateRoutingModule } from './private-routing.module';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { TaskAccordionComponent } from '../components/task-accordion/task-accordion.component';

@NgModule({
  declarations: [
    BasicInformationComponent,
    CalendarComponent,
    PatientInformationComponent,
    TaskAccordionComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class PrivateModule {}
