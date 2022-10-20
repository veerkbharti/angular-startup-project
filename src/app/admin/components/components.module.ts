import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
     MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent
  ]
})
export class ComponentsModule { }
