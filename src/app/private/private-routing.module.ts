import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'patients/patients-summary/basic-information',
        pathMatch: 'full',
        component: BasicInformationComponent,
        title: 'Robin | Basic Information',
      },
      {
        path: 'calendar',
        pathMatch: 'full',
        component: CalendarComponent,
        title: 'Robin | Calendar',
      },
      {
        path: 'patients/patient-information',
        pathMatch: 'full',
        component: PatientInformationComponent,
        title: 'Robin | Calendar',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
