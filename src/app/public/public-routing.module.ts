import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientIdentityComponent } from './patient-identity/patient-identity.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'basic-information',
        pathMatch: 'full',
        component: BasicInformationComponent,
        title: 'UHP | Patient Identity'
      },
      {
        path: 'patient-identity',
        pathMatch: 'full',
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
