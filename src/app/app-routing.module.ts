import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // 主页面
  {path: 'dashboard', loadChildren: './page/dashboard/dashboard.module#DashboardModule'},
  // 全局搜索页面
  {path: 'search', loadChildren: './page/search/search.module#SearchModule'},
  // 电影列表页面
  {path: 'movie', loadChildren: './page/movie/movie.module#MovieModule'},
  // 连续剧列表页面
  {path: 'drama', loadChildren: './page/drama/drama.module#DramaModule'},
  // 综艺列表页面
  {path: 'variety', loadChildren: './page/variety/variety.module#VarietyModule'},
  // 动画列表页面
  {path: 'anime', loadChildren: './page/anime/anime.module#AnimeModule'},
  // 详情页
  {path: 'detail', loadChildren: './page/detail/detail.module#DetailModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
