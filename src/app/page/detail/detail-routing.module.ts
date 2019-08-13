import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from './detail.component';
import {InfoComponent} from './info/info.component';
import {PlayComponent} from './play/play.component';


const routes: Routes = [
  {path: '', component: DetailComponent, children: [
      {path: '', component: InfoComponent},
      {path: 'play', component: PlayComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
