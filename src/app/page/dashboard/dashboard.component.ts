import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // 轮播数据
  carousel_list: any = [];

  // 最新分类数据
  classical_list: any = [];

  constructor(private common: CommonService) {
    this.carousel_list = this.common.get_carousel_list();
    this.classical_list = this.common.get_classical_list();
  }

  ngOnInit() {
  }

}
