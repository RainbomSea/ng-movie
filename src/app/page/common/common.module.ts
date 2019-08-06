import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThumbComponent } from './thumb/thumb.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    SidebarComponent,
    ThumbComponent
  ],
  imports: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    SidebarComponent,
    ThumbComponent
  ]
})
export class CommonModule { }
