import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-address',
  templateUrl: './play-address.component.html',
  styleUrls: ['./play-address.component.scss']
})
export class PlayAddressComponent implements OnInit {

  index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }

}
