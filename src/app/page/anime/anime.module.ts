import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeComponent } from './anime.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [AnimeComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    ShareModule
  ]
})
export class AnimeModule { }
