import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientIdentityComponent } from '../public/patient-identity/patient-identity.component';

const routes: Routes = [
  {
    path:'',
    component: BasicInformationComponent,
    children: [
      {
        path: 'patients/patients-summary/basic-information',
        component: BasicInformationComponent,
        title: 'UHP | Basic Information'
      },
      {
        path: 'calendar',
        pathMatch: 'full',
        component: CalendarComponent,
        title: 'UHP | Calendar'
      },
      {
        path: 'patients/patient-information',
        pathMatch: 'full',
        component: PatientIdentityComponent,
        title: 'UHP | Calendar'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
