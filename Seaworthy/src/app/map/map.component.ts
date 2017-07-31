import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 41.3851;
  lng: number = 2.1734;

  constructor() { }

  ngOnInit() {
  }

}
