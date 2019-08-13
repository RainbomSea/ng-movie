import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import {ShareModule} from '../share/share.module';
import { InfoComponent } from './info/info.component';
import { PlayAddressComponent } from './play-address/play-address.component';
import { InterestComponent } from './interest/interest.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { PlayComponent } from './play/play.component';


@NgModule({
  declarations: [DetailComponent, InfoComponent, PlayAddressComponent, InterestComponent, SynopsisComponent, PlayComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ShareModule
  ]
})
export class DetailModule { }
