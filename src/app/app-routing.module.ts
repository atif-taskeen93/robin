import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

const routes: Routes = [
  // private route
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'patients/patients-summary/basic-information',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
      }
    ]
  },
  // public route
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'public',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
