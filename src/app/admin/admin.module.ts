import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    AdminLayoutModule,
    AuthLayoutModule,
  ],
})
export class AdminModule {}
