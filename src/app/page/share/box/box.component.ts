import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  @Input()
  title: any;
  // box 的数据
  box_list: any = [];

  constructor(private common: CommonService) {
  }

  ngOnInit() {
    console.log(this.title);
    this.box_list = this.common.get_box_list(this.title);
  }

}
