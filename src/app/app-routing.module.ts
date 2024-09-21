import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';

import { NoAuthGuard } from './core/guards/nonAuth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  // private route
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'patients/patients-summary/basic-information',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./private/private.module').then((m) => m.PrivateModule),
        canActivate: [AuthGuard],
      },
    ],
  },
  // public route
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./public/public.module').then((m) => m.PublicModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [NoAuthGuard],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent, // Show unauthorized access page
  },
  // Wildcard route for a 404 page
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
