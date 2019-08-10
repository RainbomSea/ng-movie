import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewClassicalComponent } from './new-classical/new-classical.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CarouselComponent,
    NewClassicalComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ],
  exports: [
    DashboardComponent,
    NewClassicalComponent
  ]
})
export class DashboardModule { }
