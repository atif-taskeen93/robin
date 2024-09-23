import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { UserRole } from '../core/utils/app.enum';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'patients/patients-summary/basic-information',
        pathMatch: 'full',
        component: BasicInformationComponent,
        title: 'Robin | Basic Information',
        data: { expectedRoles: [UserRole.ADMIN, UserRole.PATIENT] },
      },
      {
        path: 'calendar',
        pathMatch: 'full',
        component: CalendarComponent,
        title: 'Robin | Calendar',
        data: { expectedRoles: [UserRole.ADMIN, UserRole.PATIENT] },
      },
      {
        path: 'patients/patient-information',
        pathMatch: 'full',
        component: PatientInformationComponent,
        title: 'Robin | Calendar',
        data: { expectedRoles: [UserRole.ADMIN, UserRole.PATIENT] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
