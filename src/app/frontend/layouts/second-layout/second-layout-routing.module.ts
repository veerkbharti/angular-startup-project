import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondLayoutComponent } from './second-layout.component';

const routes: Routes = [{ path: '', component: SecondLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondLayoutRoutingModule { }
