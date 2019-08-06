import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-classical',
  templateUrl: './new-classical.component.html',
  styleUrls: ['./new-classical.component.scss']
})
export class NewClassicalComponent implements OnInit {

  title: string;

  constructor() {
  }

  ngOnInit() {
    this.title = '最新电影';
  }
}
