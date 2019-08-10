import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ContentComponent } from './content/content.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [SearchComponent, ContentComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ShareModule
  ]
})
export class SearchModule { }
