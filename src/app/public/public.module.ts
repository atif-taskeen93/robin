import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PatientIdentityComponent } from './patient-identity/patient-identity.component';


@NgModule({
  declarations: [
    PatientIdentityComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
