import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // 主页面
  {path: 'dashboard', loadChildren: './page/dashboard/dashboard.module#DashboardModule'},
  {path: 'movie', loadChildren: './page/movie/movie.module#MovieModule'},
  {path: 'drama', loadChildren: './page/drama/drama.module#DramaModule'},
  {path: 'variety', loadChildren: './page/variety/variety.module#VarietyModule'},
  {path: 'anime', loadChildren: './page/anime/anime.module#AnimeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
