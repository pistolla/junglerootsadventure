import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  packages: any[] = [{
    
  }];
  itemsRow: number = 6;
  rows: any[] = [];

  constructor() { }

  ngOnInit() {
    this.rows = Array.from(Array(Math.ceil(this.packages.length / this.itemsRow)).keys())
  }

}
