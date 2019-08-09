import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxComponent } from './box/box.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ShareRoutingModule} from './share-routing.module';
import { ThumbComponent } from './thumb/thumb.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    SidebarComponent,
    ThumbComponent,
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    SidebarComponent
  ]
})
export class ShareModule { }
