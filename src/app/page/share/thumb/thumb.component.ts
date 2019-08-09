import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent implements OnInit {

  index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  constructor() { }

  ngOnInit() {
  }

}
