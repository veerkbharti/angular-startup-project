import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../../pages/contact/contact.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
