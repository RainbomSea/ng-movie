import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  index = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
