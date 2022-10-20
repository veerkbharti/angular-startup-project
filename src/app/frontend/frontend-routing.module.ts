import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SecondLayoutComponent } from './layouts/second-layout/second-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./layouts/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
  },
  {
    path: 'auth',
    component: SecondLayoutComponent,
    loadChildren: () =>
      import('./layouts/second-layout/second-layout.module').then(
        (m) => m.SecondLayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
