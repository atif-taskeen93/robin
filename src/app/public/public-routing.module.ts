import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientIdentityComponent } from './patient-identity/patient-identity.component';

const routes: Routes = [
  {
    path:'',
    component: PatientIdentityComponent,
    children: [
      {
        path: 'patient-identity',
        component: PatientIdentityComponent,
        title: 'UHP | Patient Identity'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
