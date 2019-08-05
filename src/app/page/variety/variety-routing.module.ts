import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VarietyComponent} from './variety.component';


const routes: Routes = [
  {path: '', component: VarietyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VarietyRoutingModule { }
