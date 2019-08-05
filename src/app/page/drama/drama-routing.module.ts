import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DramaComponent} from './drama.component';


const routes: Routes = [
  {path: '', component: DramaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DramaRoutingModule { }
