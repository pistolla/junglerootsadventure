import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  itemsRow: number = 3;
  rows: any[] = [];
  destinations: any[] = [{
    id: "1",
    name: "MAASAI MARA/SERENGETI NATIONAL PARK, KENYA. WILDBEEST MIGATION SEASON",
    description: "Get a chance to spot the elephant, leopard, lion, giraffe",
    features: ["Spot Big 5", "5 Days, 4 Night", "5 Star Accommodations", "Handpicked Hotels", "Given Transportation"],
    imageUrl: "/assets/img/destination/masaimara.jpg"
  }, {
    id: "2",
    name: "AMBOSELI NATIONAL PARK, ",
    description: "Get a chance to spot the elephant, leopard, lion, giraffe",
    features: ["Spot Big 5", "5 Days, 4 Night", "5 Star Accommodations", "Handpicked Hotels", "Given Transportation"],
    imageUrl: "/assets/img/destination/amboseli.jpg"
  }, {
    id: "3",
    name: "AMBOSELI NATIONAL PARK, ",
    description: "Get a chance to spot the elephant, leopard, lion, giraffe",
    features: ["Spot Big 5", "5 Days, 4 Night", "5 Star Accommodations", "Handpicked Hotels", "Given Transportation"],
    imageUrl: "/assets/img/destination/samburu.jpg"
  }];

  constructor() { }

  ngOnInit() {
    this.rows = Array.from(Array(Math.ceil(this.destinations.length / this.itemsRow)).keys())
  }

}
