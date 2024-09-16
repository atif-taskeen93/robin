import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientIdentityComponent } from './patient-identity/patient-identity.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { InsuranceInformationComponent } from './insurance-information/insurance-information.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { SexualHealthComponent } from './sexual-health/sexual-health.component';
import { PatientFormsComponent } from './patient-forms/patient-forms.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'patient-identity',
        pathMatch: 'full',
        component: PatientIdentityComponent,
        title: 'Robin | Patient Identity',
      },
      {
        path: 'patient-forms',
        pathMatch: 'full',
        component: PatientFormsComponent,
        title: 'Robin | Patient Forms',
      },
      {
        path: 'basic-information',
        pathMatch: 'full',
        component: BasicInformationComponent,
        title: 'Robin | Basic Information',
      },
      {
        path: 'insurance-information',
        pathMatch: 'full',
        component: InsuranceInformationComponent,
        title: 'Robin | Insurance Information',
      },
      {
        path: 'medical-history',
        pathMatch: 'full',
        component: MedicalHistoryComponent,
        title: 'Robin | Medical History',
      },
      {
        path: 'sexual-health',
        pathMatch: 'full',
        component: SexualHealthComponent,
        title: 'Robin | Sexual Health',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
