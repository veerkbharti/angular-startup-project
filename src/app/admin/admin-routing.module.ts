import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./layouts/admin-layout/admin-layout.module').then(
        (m) => m.AdminLayoutModule
      ),
  },
  {
    path: 'auth',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./layouts/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
