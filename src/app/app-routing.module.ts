import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        redirectTo: 'public/patient-identity',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      }
    ]
  },
    // Wildcard route for a 404 page
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
