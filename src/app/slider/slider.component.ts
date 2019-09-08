import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() itemsPerSlide: number = 0;
  @Input() itemComponent: string = '';
  @Input() slideInterval: number = 1000;
  @Input() inAContainer: boolean = false;
  @Input() isControllable: boolean = false;
  @Input() items: any[] = [
    "assets/img/bg/promote.jpg",
    "assets/img/bg/facts.jpg",
    "assets/img/bg/pack-bg.jpg",
    "assets/img/bg/footer.jpg",
    "assets/img/bg/snow.jpg",
  ];
  @Input() isSmoothScroll: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
