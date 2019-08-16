import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // 请求轮播数据
  get_carousel_list() { }

  // 请求最新视频数据
  get_classical_list() { }

  // 获取box数据
  get_box_list(title: string) {}
}
