import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '../../components/components.module';
import { PagesModule } from '../../pages/pages.module';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ComponentsModule,
    PagesModule,
  ],
})
export class AdminLayoutModule {}
