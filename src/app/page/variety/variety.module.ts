import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VarietyRoutingModule } from './variety-routing.module';
import { VarietyComponent } from './variety.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [VarietyComponent],
  imports: [
    CommonModule,
    VarietyRoutingModule,
    ShareModule
  ]
})
export class VarietyModule { }
