import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DramaRoutingModule } from './drama-routing.module';
import { DramaComponent } from './drama.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [DramaComponent],
  imports: [
    CommonModule,
    DramaRoutingModule,
    ShareModule
  ]
})
export class DramaModule { }
