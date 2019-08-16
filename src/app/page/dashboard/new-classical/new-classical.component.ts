import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-classical',
  templateUrl: './new-classical.component.html',
  styleUrls: ['./new-classical.component.scss']
})
export class NewClassicalComponent implements OnInit {

  // 最新分类数据
  @Input()
  classical_list: any = [];

  constructor() {
  }

  ngOnInit() {
  }
}
