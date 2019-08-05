import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VarietyRoutingModule } from './variety-routing.module';
import { VarietyComponent } from './variety.component';


@NgModule({
  declarations: [VarietyComponent],
  imports: [
    CommonModule,
    VarietyRoutingModule
  ]
})
export class VarietyModule { }
