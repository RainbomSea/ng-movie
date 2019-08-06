import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewClassicalComponent } from './new-classical/new-classical.component';
import {BoxComponent} from '../common/box/box.component';
import {SidebarComponent} from '../common/sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CarouselComponent,
    NewClassicalComponent,
    BoxComponent,
    SidebarComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
