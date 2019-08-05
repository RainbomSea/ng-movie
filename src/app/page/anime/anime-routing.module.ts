import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimeComponent} from './anime.component';


const routes: Routes = [
  {path: '', component: AnimeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
