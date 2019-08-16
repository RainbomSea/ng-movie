import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShareModule} from './page/share/share.module';
import {CommonService} from './services/common.service';
import {ExampleService} from './services/example.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [
    {provide: CommonService, useExisting: ExampleService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
