import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLayoutRoutingModule } from './second-layout-routing.module';
import { SecondLayoutComponent } from './second-layout.component';


@NgModule({
  declarations: [
    SecondLayoutComponent
  ],
  imports: [
    CommonModule,
    SecondLayoutRoutingModule
  ]
})
export class SecondLayoutModule { }
